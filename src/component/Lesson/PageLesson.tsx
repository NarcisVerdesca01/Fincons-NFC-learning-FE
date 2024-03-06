import { useEffect, useState } from "react";
import { useAsyncValue, useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import LessonService from "../../services/LessonService";
import Lesson from "../../models/LessonModel";
import "./PageLesson.css";
import CourseService from "../../services/CourseService";
import Course from "../../models/CourseModel";

interface Props {
  idCourse: number;
}

const PageLesson = (props : Props) => {
  const [lesson, setLesson] = useState<Lesson>();
  const [lessonList, setLessonList] = useState<Course[]>([])
  const navigate = useNavigate();
  const { idPage } = useParams();
  const idLesson_page = parseInt(idPage!);



  useEffect(() => {
    LessonService.getLessonById(idLesson_page).then((res) => {
      //console.log(res.data.data.courses[0].course.name, "sono qui");
      //console.log(res.data.data);
      setLesson(res.data.data);
      //console.log(res.data.data.courses[0])
    });
  }, [idPage]);

  useEffect(() => {
    CourseService.getCourseById(props.idCourse!).then((res) => {
      console.log(props.idCourse, "sono in pageLesson");
      console.log(res.data.data)
      setLessonList(res.data.data.lessons);
    })
  }, [props.idCourse]);

  const gotToPage = (idPage: any) => {
    navigate("/lesson_page/" + idPage);
  };

  return (
    <>
      <Header />
      <div className={`containerPageLesson`}>
        <div className={`containerTitlePageLesson`}>
          <h1>{lesson?.title}</h1>
        </div>
        <div className={`bodyLesson`}>
          <div className={`containerContentsLesson`}>

          </div>
          <div className={`containerListLessons`}>
          {lessonList.map((lesson: any) => (
            <div className={`cardPageLesson`} onClick={() =>gotToPage(lesson.lesson.id)}>
              <div className={`containerImageLesson`}>
                <img src={lesson.lesson.backgroundImage} alt={lesson.lesson.title} className={`imageLesson`}/>
              </div>
              <div className={`containerTitleLesson`}>
                  <h5 className={`titleLesson`} >{lesson.lesson.title}</h5>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default PageLesson;
