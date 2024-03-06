import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCoursePresentation.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";

const PageCoursePresentation = () => {
  const [course, setCourse] = useState<CourseModel>();
  const [lessonList, setLessonList] = useState<LessonModel[]>([])
  const navigate = useNavigate();
  const { idCourse } = useParams();
  const idCourse_page = parseInt(idCourse!);


  useEffect(() => {
    CourseService.getCourseById(idCourse_page).then((res) => {
      setCourse(res.data.data);
      console.log(res.data.data.lessons);
      setLessonList(res.data.data.lessons)
    });
  }, [idCourse]);

  return (
    <>
      <Header />
      <div className={`containerPageCoursePresentation`}>
        <div className={`containerTitlePageCoursePresentation`}>
          <h1>{course?.name}</h1>
        </div>
        <div className={`containerContextCoursePresentation`}>
          <div className={`imageCardCoursePresentation`}>
            <img src={course?.backgroundImage} alt="" className={`imageStyleCoursePresentation`} />
          </div>
          <div className={`containerTextCoursePresentation`}>
            <p className={`textCoursePresentation`}>
              {course?.description}
            </p>
          </div>
        </div>
        <div className={`containerTitleResourcesCoursePresentation`}>
          <div className={`titleResourcesCoursePresentation`}>
            <h1>Resources</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCoursePresentation;
