import {formattedDate} from "shared/helpers/dateFormat.ts";
import TextArea from "antd/es/input/TextArea";
import {MyButton} from "shared/index.ts";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "entities/user/model/userSelector.ts";
import {addComment, deleteComment} from "entities/tasks/model/asyncActions.ts";


//@ts-ignore
import styles from './Task.module.scss'
import {CloseOutlined} from '@ant-design/icons'


const Task = ({Code, Status, TaskId, Title, Description, due_date, time_spent, comments = []}) => {


    const {user} = useSelector(selectUser)
    const dispatch = useDispatch()
    const [commentValue, setCommentValue] = useState('')


    const createComment = () => {
        if (!commentValue.trim()) return

        const newComment = {
            author: user.name,
            text: commentValue,
        }
        dispatch(addComment({...newComment, TaskId, Code, comments}))
        setCommentValue('')
    }

    const removeComment = (index) => {
        dispatch(deleteComment({TaskId, Code, comments, index}))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            createComment()
            setCommentValue('')
        }
    }


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
                <h3>Comments</h3>
                <div className={styles.commentList}>
                    {
                        comments
                            .filter(comment => comment.text && comment.author && comment.timestamp)
                            .map((comment, index) => (
                                <div key={index} className={styles.commentItem}>
                                    <div className={styles.commentUser}>
                                        {comment.author}
                                        <div className={styles.commentIcon}>
                                            {
                                                user.name === comment.author ?
                                                    <CloseOutlined onClick={() => removeComment(index)}/>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    <span className={styles.commentDate}>({formattedDate(comment.timestamp)})</span>
                                    <div className={styles.commentText}>{comment.text}</div>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div>
                <div className={styles.addComment}>
                    <TextArea
                        value={commentValue}
                        onChange={(e) => setCommentValue(e.target.value)}
                        className={styles.commentInput}
                        placeholder="Add a comment..."
                        onKeyPress={handleKeyPress}
                    />
                    <MyButton className={styles.commentButton}
                              onClick={createComment}
                    >Отправить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Task;