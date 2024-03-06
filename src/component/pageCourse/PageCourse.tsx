import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCourse.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";

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

  const gotToPage = (idPage: any) => {
    navigate("/lesson_page/" + idPage);
  };

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
            <p className={`textCourse2`}>
              Welcome to The Complete MySQL Bootcamp: From SQL Beginner to
              Expert. This course is 100% up-to-date We answer absolutely every
              question our students ask and the responses we give are thoroughly
              detailed Why to learn SQL? Because according to the latest Stack
              Overflow Survey, SQL takes third place (54.7%) among the most
              popular programming, scripting and markup languages. How will my
              lessons look? Straight to the point, no time wasted! Firstly, all
              theory will be explained on slides and after you get the concept,
              we show you how it works in practice. Will I have lots of
              practice? This course comes packed with lots of exercises to
              effectively practice and actually use SQL in order to help you
              advance quickly.
            </p>
          </div>
        </div>
        <div className={`containerContextCourse`}>
          <div className={`titleResources`}>
            <h1>Resources</h1>
          </div>
        </div>
        <div className={`containerResources`}>
          {lessonList.map((lessons: any) => (
            <div className={`cardPageCourseLesson`}>
              <div className={`cardLessonPageCorseLesson`}>
                <button
                  className={`buttonLesson`}
                  onClick={() => gotToPage(lessons?.id)}
                >
                  {lessons.lesson.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PageCourse;
