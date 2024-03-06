import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCourse.css";
import Header from "../header/Header";
import LessonModel from "../../models/LessonModel";

interface Props {
  courseId: number;
  setCourseId: React.Dispatch<React.SetStateAction<number | undefined>>
}

const PageCourse = (props: Props) => {
  const [course, setCourse] = useState<CourseModel>();
  const [lessonList, setLessonList] = useState<LessonModel[]>([])
  const navigate = useNavigate();
  const { idCourse } = useParams();
  const idCourse_page = parseInt(idCourse!);


  useEffect(() => {
    CourseService.getCourseById(idCourse_page!).then((res) => {
      setCourse(res.data.data);
      console.log(idCourse_page, " idCourse_page");
      props.setCourseId(idCourse_page);
      console.log(res.data.data.lessons, "sono qui in PageCourse res.data.data.lessons");
      setLessonList(res.data.data.lessons)
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
              {course?.description}
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
            <div className={`cardLessonPageCorse`}>
              <button className={`buttonLesson`}
                onClick={() => gotToPage(lessons?.id)}>
                {lessons.lesson.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageCourse;
