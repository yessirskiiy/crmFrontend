

// @ts-ignore
import styles from './ProjectCard.module.scss'


const ProjectCard = ({CreatedAt, status, Name, Id, onClickProjectDetails, Code}) => {

    const formattedDate = new Date(CreatedAt).toLocaleDateString("ru-RU", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })


    return (
        <div className={`${styles.projectCard} ${status}`} onClick={() => onClickProjectDetails(Code)}>
            <div className={styles.eventInfo}>
                <h3>{Name}</h3>
                <p>{formattedDate}</p>
            </div>
            <div className={styles.eventMeta}>
                <span className={`${styles.statusIcon} ${status}`}></span>
            </div>
        </div>
    );
};

export default ProjectCard;