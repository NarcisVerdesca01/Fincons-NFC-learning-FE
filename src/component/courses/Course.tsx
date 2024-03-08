import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./Course.css";
import Header from "../header/Header";

const Course = () => {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourseList(res.data.data);
    });
  }, []);

  const gotToPage = (idCorso: any) => {
    navigate("/course_page_presentation/" + idCorso);
  };

  return (
    <>
      <Header />
      <div className={`containerCourse`}>
        <div className={`containerTitleCourse`}>
          <h1>Our Course</h1>
        </div>
        <div className={`containerCardCourse`}>
          {courseList.map((course: CourseModel) => (
            <div className={`cardCourse`}>
              <div
                className={`containerImgCardCourse`}
                onClick={() => gotToPage(course?.id)}
              >
                <img
                  src={course.backgroundImage ? course.backgroundImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                  alt={course.name}
                  className={`imgCardCourse`}
                />
              </div>
              <div className={`titleCardCourse`}>
                <h3>{course.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
