import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import "./PageLesson.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";
import LessonService from "../../services/LessonService";
import Lesson from "../../models/LessonModel";

const PageCourse = () => {
  const [lesson, setLesson] = useState<Lesson>();
  const navigate = useNavigate();
  const { idPage } = useParams();
  const idLesson_page = parseInt(idPage!);


  useEffect(() => {
    LessonService.getLessonById(idLesson_page).then((res) => {
        console.log(res.data.data);
        setLesson(res.data.data)
    });
  }, [idPage]);


  return (
    <>
      <Header />
      <div className={`containerPageCourse`}>
        <div className={`containerTitlePageCourse`}>
          <h1>{lesson?.title}</h1>
        </div>
      </div>
    </>
  );
};

export default PageCourse;
