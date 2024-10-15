import {formattedDate} from "shared/helpers/dateFormat.ts";

// @ts-ignore
import styles from './ProjectCard.module.scss'



const ProjectCard = ({CreatedAt, status, Name, onClickProjectDetails, Code}) => {


    return (
        <div className={`${styles.projectCard} ${status}`} onClick={() => onClickProjectDetails(Code)}>
            <div className={styles.eventInfo}>
                <h3>{Name}</h3>
                <p>{formattedDate(CreatedAt)}</p>
            </div>
            <div className={styles.eventMeta}>
                <span className={`${styles.statusIcon} ${status}`}></span>
            </div>
        </div>
    );
};

export default ProjectCard;