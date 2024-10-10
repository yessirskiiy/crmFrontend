import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../../../entities/tasks/model/tasksSelector.ts";
import {useEffect, useState} from "react";
import {fetchTask, fetchTasksByProject} from "../../../entities/tasks/model/asyncActions.ts";
import {useParams} from "react-router-dom";
import {CurrentTask} from "../../../widgets/Task";


//@ts-ignore
import styles from './ProjectsDetails.module.scss'


const ProjectDetails = () => {

    const [visible, setVisible] = useState(false)
    const [active, setActive] = useState(null)


    const {tasks, selectedTask, loading} = useSelector(selectTasks)
    const dispatch = useDispatch()
    const {Code} = useParams()

    useEffect(() => {
        dispatch(fetchTasksByProject(Code))
    }, [tasks, dispatch])

    const showTask = (TaskId) => {
        try{
            dispatch(fetchTask({Code, TaskId}))
            setVisible(true)
            setActive(TaskId)
        }catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={styles.taskDetails}>
            <div className={styles.taskList}>
                {
                    tasks.map((task, index) => (
                        <div
                            className={task.TaskId === active ? styles.taskItemActive : styles.taskItem}
                            key={task.Title}
                            onClick={() => showTask(task.TaskId)}
                        >{task.Title}</div>
                    ))
                }
            </div>
            {
                visible ? <CurrentTask {...selectedTask}/> : null
            }
        </div>
    );
};

export default ProjectDetails;