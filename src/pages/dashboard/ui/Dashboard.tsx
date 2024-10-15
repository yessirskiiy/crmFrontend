import {selectProjects} from "entities/project/model/projectsSelector.ts";
import {useEffect, useState} from "react";
import {fetchTasksByProject} from "entities/tasks/model/asyncActions.ts";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "entities/tasks/model/tasksSelector.ts";
import {Select} from "antd";
import {fetchProjects} from "entities/project/model/asyncActions.ts";


//@ts-ignore
import styles from './Dashboard.module.scss'


const Dashboard = () => {


    const dispatch = useDispatch()

    const [selectedProject, setSelectedProject] = useState('')
    const [columns, setColumns] = useState([
        {id: 1, status: 'open', items: []},
        {id: 2, status: 'in progress', items: []},
        {id: 3, status: 'on hold', items: []},
        {id: 4, status: 'done', items: []},
    ])

    const {tasks} = useSelector(selectTasks)
    const {projects} = useSelector(selectProjects)


    useEffect(() => {
        dispatch(fetchProjects())

    }, [dispatch])


    useEffect(() => {
        if (tasks.length) {
            const updatedColumns = columns.map((column) => (
                {
                    ...column,
                    items: tasks.filter((task) => task.Status.toLowerCase() === column.status)
                }))
            setColumns(updatedColumns)
        }
    }, [tasks])

    const fetchProjectByCode = (value) => {
        setSelectedProject(value)
        dispatch(fetchTasksByProject(selectedProject))
    }


    const [draggedTask, setDraggedTask] = useState<any>(null)

    const onDragStart = (task: any) => {
        setDraggedTask(task)
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDrop = (columnId: number) => {

        const updatedColumns = columns.map((column) => {
            if (column.items.includes(draggedTask)) {
                return {...column, items: column.items.filter((item) => item !== draggedTask)}
            }
            return column
        })


        const targetColumn = updatedColumns.find((column) => column.id === columnId)
        if (targetColumn) {
            targetColumn.items.push({...draggedTask, Status: targetColumn.status})
        }

        setColumns(updatedColumns);
    }


    return (
        <div className={styles.dashboard}>
            <Select
                style={{width: "180px", marginBottom: "20px"}}
                onChange={fetchProjectByCode}
                options={projects.map((obj, index) => ({
                    value: obj.Code,
                    label: obj.Name,
                }))}
            />
            <div className={styles.columns}>
                {columns.map((column) => (
                    <div className={styles.column} key={column.id} onDragOver={onDragOver}
                         onDrop={() => onDrop(column.id)}>
                        <h2>{column.status}</h2>
                        {column.items.map((item) => (
                            <div className={styles.taskList} key={item.Title}>
                                <div draggable={true} onDragStart={() => onDragStart(item)}>
                                    {item.Title}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;