import {formattedDate} from "../../../shared/helpers/dateFormat.ts";


//@ts-ignore
import styles from './Task.module.scss'


const Task = ({Status, Title, Description, due_date, time_spent}) => {



    return (
        <div className={styles.info}>
            <div className={styles.topBar}>
                <div className={styles.title}>
                    {Title}
                </div>
                <div className={styles.date}>
                    <div className={styles.dateStart}>
                        {formattedDate(due_date)}
                    </div>
                    <div className={styles.dateEnd}>
                        {time_spent} Minutes
                    </div>
                </div>
                <div className={styles.status}>{Status}</div>
            </div>
            <div className={styles.midBar}>
                <div className={styles.description}>
                    {Description}
                </div>
            </div>

            <div className={styles.comments}>

            </div>
        </div>
    );
};

export default Task;