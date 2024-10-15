import {useState} from 'react';
import {FiLogOut} from 'react-icons/fi';
import {AiFillHome, AiFillProject} from 'react-icons/ai';
import {BsFillCalendarFill} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {logOut} from "entities/user/model/userSlice.ts";

// @ts-ignore
import styles from './Sidebar.module.scss';


const Sidebar = () => {

    const dispatch = useDispatch()

    const [active, setActive] = useState('projects');

    const toggleMenu = (item: string) => {
        setActive(item);
    };


    return (
        <div className={styles.sidebar}>
            <div className={styles.content}>
                <Link to='/'>
                    <h1>H&H CRM</h1>
                </Link>
                <ul>
                    <li>
                        <Link to='/'

                              className={active === 'projects' ? `${styles.active}` : ''}
                              onClick={() => toggleMenu('projects')}
                        ><AiFillHome/>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard'
                              className={active === 'dashboard' ? `${styles.active}` : ''}
                              onClick={() => toggleMenu('dashboard')}
                        >
                            <AiFillProject/>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/diagram'
                            className={active === 'diagram' ? `${styles.active}` : ''}
                            onClick={() => toggleMenu('diagram')}
                        >
                            <BsFillCalendarFill/>
                            Diagram
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.logout}>
                <Link to="/login" onClick={() => dispatch(logOut())}>
                    <FiLogOut/>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
