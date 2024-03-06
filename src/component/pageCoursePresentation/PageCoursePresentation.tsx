import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCoursePresentation.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";
import Footer from "../footer/Footer";

const PageCourse = () => {
  const [course, setCourse] = useState<CourseModel>();
  const [lessonList, setLessonList] = useState<LessonModel[]>([]);
  const navigate = useNavigate();
  const { idCourse } = useParams();
  const idCourse_page = parseInt(idCourse!);

  useEffect(() => {
    CourseService.getCourseById(idCourse_page).then((res) => {
      setCourse(res.data.data);
      console.log(res.data.data.lessons);
      setLessonList(res.data.data.lessons);
    });
  }, [idCourse]);

  return (
    <>
      <Header />
      <div className={`containerPageCourse`}>
        <div className={`containerTitlePageCourse`}>
          <h1>{course?.name}</h1>
        </div>
        <div className={`containerContextCourse`}>
          <div className={`imageCardCourse`}>
            <img src={course?.backgroundImage} alt="" className="imageStyle" />
          </div>
          <div className={`textCourse`}>
            <p className={`textCourse2`}>{course?.description}</p>
          </div>
        </div>
        <div className={`containerContextCourse`}>
          <div className={`titleResources`}>
            <h1>Resources</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCourse;
