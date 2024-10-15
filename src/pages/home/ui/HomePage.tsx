import {useDispatch, useSelector} from "react-redux";
import {selectProjects} from "entities/project/model/projectsSelector.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {fetchProjects} from "entities/project/model/asyncActions.ts";
import {ProjectCard, SkeletonCard} from "widgets/ProjectCard";


//@ts-ignore
import styles from './Home.module.scss'


const HomePage = () => {

    const {projects, loading} = useSelector(selectProjects)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProjects())
    }, [])


    const navigate = useNavigate()
    const onClickProjectDetails = (Code) => {
        navigate(`/project/${Code}`)
    }


    return (
        <div>
            <section className={styles.nearestEvents}>
                <div className={styles.eventsList}>
                    {loading === 'loading' ?
                        [...Array(8)].map((_, index) => <SkeletonCard key={index}/>)
                        :
                        projects.map((obj, index) => (
                            <ProjectCard
                                {...obj}
                                key={obj.Id}
                                onClickProjectDetails={onClickProjectDetails}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default HomePage;