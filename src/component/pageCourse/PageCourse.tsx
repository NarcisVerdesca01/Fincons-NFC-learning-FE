import { useEffect, useState } from 'react';
import CourseModel from '../../models/CourseModel';
import { useNavigate, useParams } from 'react-router-dom';
import CourseService from '../../services/CourseService';
import './PageCourse.css';
import Header from '../header/Header';
import Ability from '../../models/AbilityModel';
import AbilityService from '../../services/AbilityService';


const PageCourse = () => {
    const [course, setCourse] = useState<CourseModel>();

    const navigate = useNavigate();
    const { idCourse } = useParams();
    const idCourse_page = parseInt(idCourse!);
    useEffect(() => {
        CourseService.getCourseById(idCourse_page).then((res) => {
            setCourse(res.data.data)
        });
    }, [idCourse]);

    return (
        <div className={`containerCourse`}>
            <Header />
            <div className={`containerTitleCourse`}>
                <h1>{course?.name}</h1>
            </div>
            <div className={`containerCardCourse`}>
                <div>
                    <img src={course?.backgroundImage} alt="" />
                </div>
                <div>
                    <p>
                        {course?.description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PageCourse;