import {Routes, Route} from "react-router-dom";
import {Layout} from "../widgets/Layout";
import {HomePage} from "../pages/home";
import {SignIn} from "../pages/sign-in";
import {SignUp} from "../pages/sign-up";
import {Profile} from "../pages/profile"
import {ProjectDetails} from "../pages/project-details";
import {HeaderProvider} from "widgets/Header/model/HeaderContext.tsx";
import {Dashboard} from "pages/dashboard";


function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/project/:Code' element={<ProjectDetails/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Route>
                <Route path='/profile/:id' element={<Profile/>}/>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/register' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default App
