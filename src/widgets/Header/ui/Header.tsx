import {GrNotification} from 'react-icons/gr';
import {Link} from "react-router-dom";
import {MyButton, MyInput} from "../../../shared";
import {selectUser} from "../../../entities/user/model/userSelector.ts";
import {useSelector} from "react-redux";


// @ts-ignore
import styles from './Header.module.scss'


const Header = () => {

    const {user} = useSelector(selectUser)


    return (
        <div className={styles.header}>
            <div className={styles.topBar}>
                <a className={styles.notifications}>
                    <GrNotification className="w-6 h-6"/>
                </a>
                <Link to={`profile/${user.id}`} className={styles.userInfo}>
                    <img src={user.avatar_url} alt="Profile"/>
                    <span>{user.name}</span>
                </Link>
            </div>
            <div className={styles.lowerBar}>
                <div>
                    <h1 className={styles.title}>Some title</h1>
                </div>
                <div className={styles.actions}>
                    <div className={styles.searchInput}>
                        <MyInput placeholder="Search" className={styles.searchInput}/>
                    </div>
                    <MyButton>Добавить что то</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Header;
