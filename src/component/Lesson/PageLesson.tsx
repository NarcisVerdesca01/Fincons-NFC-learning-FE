import { useEffect, useState } from "react";
import { useAsyncValue, useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import LessonService from "../../services/LessonService";
import Lesson from "../../models/LessonModel";
import "./PageLesson.css";
import CourseService from "../../services/CourseService";
import Course from "../../models/CourseModel";
import Footer from "../footer/Footer";
interface Props {
  idCourse: number;
}

const PageLesson = (props: Props) => {
  const [lesson, setLesson] = useState<Lesson>();
  const [lessonList, setLessonList] = useState<Course[]>([]);
  const navigate = useNavigate();
  const { idPage } = useParams();
  const idLesson_page = parseInt(idPage!);

  console.log(idLesson_page, "lesson_page id")

  useEffect(() => {
    LessonService.getLessonById(idLesson_page).then((res) => {
      //console.log(res.data.data.courses[0].course.name, "sono qui");
      console.log(res, " res");
      setLesson(res.data.data);

      //console.log(res.data.data.courses[0])
    });
  }, [idLesson_page]);

  useEffect(() => {
    CourseService.getCourseById(props.idCourse!).then((res) => {
      console.log(props.idCourse, "sono in pageLesson corso id");
      console.log(res.data.data);
      setLessonList(res.data.data.lessons);
    });
  }, [props.idCourse]);

  console.log(lesson?.quiz?.id, "quiz id --------")

  const gotToLessonPage = (idPage: any) => {
    console.log(idPage)
    navigate("/lesson_page/" + idPage);
  };


  const gotToQuizPage = (idQuiz: any) => {
    console.log("L'id del quiz è: " + idQuiz)
    navigate("/quiz_page/" + idQuiz);
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
            <iframe className={`iFrameContent`} src={lesson?.content?.content} frameBorder="0" allowFullScreen ></iframe>


          </div>



          <div className={`containerListLessons`}>
            {lessonList.map((lesson: any) => (
              <div
                className={`cardPageLesson`}
                onClick={() => gotToLessonPage(lesson?.lesson.id)}
              >
                <div className={`containerImageLesson`}>
                  <img
                    src={lesson?.lesson.backgroundImage ? lesson.lesson.backgroundImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                    alt={lesson?.lesson.title}
                    className={`imageLesson`}
                  />
                </div>
                <div className={`containerTitleLesson`}>
                  <h5 className={`titleLesson`}>{lesson.lesson.title}</h5>
                </div>


              </div>
            ))}
          </div>
          <div className={`containerQuizOfLesson`}>
            <button onClick={() => gotToQuizPage(lesson?.quiz?.id)}>vai al quiz</button>
          </div>



        </div>





      </div>
    </>
  );
};

export default PageLesson;
