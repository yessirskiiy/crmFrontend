import {GrNotification} from 'react-icons/gr';
import {Link} from "react-router-dom";
import {MyButton, Search} from "shared/index.ts";
import {selectUser} from "entities/user/model/userSelector.ts";
import {useSelector} from "react-redux";
import { useModal } from "shared/ui/Modal/model/ModalContext.tsx"


// @ts-ignore
import styles from './Header.module.scss'
import {Select} from "antd";




const Header = ({onSearch, buttonText, pageTitle}) => {

    const {user} = useSelector(selectUser)
    const {setModalOpen} = useModal()


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
                    <h1 className={styles.title}>{pageTitle}</h1>
                </div>
                <div className={styles.actions}>
                    <div className={styles.searchInput}>
                        <Search className={styles.searchInput} onSearch={onSearch}/>
                    </div>
                    <MyButton onClick={() => setModalOpen(true)}>{buttonText}</MyButton>
                </div>
            </div>
        </div>

    );
};

export default Header;
