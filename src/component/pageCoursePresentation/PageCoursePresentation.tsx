import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCoursePresentation.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";
import Footer from "../footer/Footer";

const PageCoursePresentation = () => {
  const [course, setCourse] = useState<CourseModel>();
  const [lessonList, setLessonList] = useState<LessonModel[]>([]);
  const navigate = useNavigate();
  const { idCourse } = useParams();
  const idCourse_page = parseInt(idCourse!);

  useEffect(() => {
    CourseService.getCourseById(idCourse_page).then((res) => {
      setCourse(res.data);
      setLessonList(res.data.lessons);
    });
  }, [idCourse]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <div className={`containerPageCoursePresentation`}>
        <div className={`containerButtonBack`}>
          <button className={`buttonBack`} onClick={goBack}>
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
        <div className={`containerContextCoursePresentation`}>
          <div className={`imageCardCoursePresentation`}>
            <img
              src={course?.backgroundImage}
              alt=""
              className={`imageStyleCoursePresentation`}
            />
            <label>Created by: {course?.createdBy}</label>
            <label>Modified by: {course?.lastModifiedBy || "/"}</label>
          </div>
          <div className={`containerTextCoursePresentation`}>
            <h1 className={`course-title-name`}>{course?.name}</h1>
            <p className={`textCoursePresentation`}>{course?.description}</p>
          </div>
        </div>
        <div className={`containerTitleResourcesCoursePresentation`}>
          <div className={`titleResourcesCoursePresentation`}>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageCoursePresentation;
