import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "entities/tasks/model/tasksSelector.ts";
import {useEffect, useState} from "react";
import {createTask, fetchTask, fetchTasksByProject} from "entities/tasks/model/asyncActions.ts";
import {useParams} from "react-router-dom";
import {CurrentTask} from "widgets/Task";
import {useModal} from "shared/ui/Modal/model/ModalContext.tsx"

//@ts-ignore
import styles from './ProjectsDetails.module.scss'
import {MyModal} from "shared/index.ts";
import {DatePicker, Select} from "antd";


const ProjectDetails = () => {


    const {tasks, selectedTask} = useSelector(selectTasks)
    const dispatch = useDispatch()
    const {Code} = useParams()


    const [visible, setVisible] = useState(false)
    const [active, setActive] = useState(null)
    const [newTask, setNewTask] = useState({
        Title: '',
        Description: '',
        Priority: '',
        due_date: '',
    })

    const {modalOpen, setModalOpen} = useModal()


    useEffect(() => {
        dispatch(fetchTasksByProject(Code))
    }, [Code, dispatch])

    const showTask = (TaskId) => {
        try {
            dispatch(fetchTask({Code, TaskId}))
            setVisible(true)
            setActive(TaskId)
        } catch (error) {
            console.log(error)
        }
    }

    const writeTask = () => {
        dispatch(createTask({Code, newTask}))
        setModalOpen(false)
    }


    return (
        modalOpen
            ? <MyModal setModalOpen={setModalOpen} modalOpen={modalOpen} onOk={writeTask}>
                <div className={styles.modalContent}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Title"
                            className={styles.input}
                            value={newTask.Title}
                            onChange={(e) => setNewTask({...newTask, Title: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className={styles.input}
                            value={newTask.Description}
                            onChange={(e) => setNewTask({...newTask, Description: e.target.value})}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <DatePicker
                            placeholder="Select date"
                            className={styles.datePicker}
                            onChange={(date) => setNewTask({...newTask, due_date: date.toISOString()})}
                        />
                        <Select
                            className={styles.select}
                            onChange={(value) => setNewTask({...newTask, Priority: value})}
                            options={[
                                {value: 'major', label: 'Major'},
                                {value: 'critical', label: 'Critical'},
                                {value: 'minor', label: 'Minor'},
                                {value: 'blocker', label: 'Blocker', disabled: true},
                            ]}
                            placeholder="Select priority"
                        />
                    </div>
                </div>
            </MyModal>
            :
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
                    visible ? <CurrentTask {...selectedTask} Code={Code}/> : null
                }
            </div>
    );
};

export default ProjectDetails;