import {Sidebar} from "widgets/Sidebar";
import {Header} from "widgets/Header";
import {Navigate, Outlet, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "entities/user/model/userSelector.ts";
import {fetchTasksByProject} from "entities/tasks/model/asyncActions.ts";
import {setTasks} from "entities/tasks/model/tasksSlice.ts";
import {selectTasks} from "entities/tasks/model/tasksSelector.ts";
import {ModalProvider} from "shared/ui/Modal/model/ModalContext.tsx"

//@ts-ignore
import styles from './Layout.module.scss'


const Layout = () => {

    const {user} = useSelector(selectUser)
    const {tasks} = useSelector(selectTasks)
    const dispatch = useDispatch()
    const {Code} = useParams()
    const location = useLocation()


    const handleSearch = (query) => {
        if (location.pathname.includes(`/project/${Code}`)) {
            if (query.trim() === '') {
                dispatch(fetchTasksByProject(Code))
            } else {
                const newSearchTasks = tasks.filter((task) => task.Title.toLowerCase().includes(query.toLowerCase()))
                dispatch(setTasks(newSearchTasks))
            }
        } else if (location.pathname.includes('/projects')) {
            console.log("Search for projects:", query)
        }
    }


    const buttonText = location.pathname.includes(`/project/${Code}`) ? 'Добавить задачу' :
        location.pathname.includes('') ? 'Добавить проект' : 'Добавить';


    let pageTitle

    if (location.pathname.includes(`/project/${Code}`)) {
        pageTitle = Code
    } else if (location.pathname.includes('/dashboard')) {
        pageTitle = 'Dashboard'
    } else if (location.pathname.includes('')) {
        pageTitle = 'Projects'
    }


    if (!user) {
        return <Navigate to='/login'/>
    }

    return (
        <ModalProvider>
            <div className={styles.layout}>
                <div className={styles.sidebar}>
                    <Sidebar/>
                </div>
                <div className={styles.header}>
                    <Header onSearch={handleSearch} buttonText={buttonText} pageTitle={pageTitle}/>
                    <div className={styles.content}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </ModalProvider>
    );
};

export default Layout;