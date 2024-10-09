import {Sidebar} from "../../Sidebar";
import {Header} from "../../Header";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../../entities/user/model/userSelector.ts";


//@ts-ignore
import styles from './Layout.module.scss'


const Layout = () => {

    const {user} = useSelector(selectUser)

    if (!user) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.header}>
                <Header/>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>

    );
};

export default Layout;