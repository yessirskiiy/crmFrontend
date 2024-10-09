import {Routes, Route} from "react-router-dom";
import {Layout} from "../widgets/Layout";
import {HomePage} from "../pages/home";
import {SignIn} from "../pages/sign-in";
import {SignUp} from "../pages/sign-up";


function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<HomePage/>}/>
                </Route>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/register' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default App
