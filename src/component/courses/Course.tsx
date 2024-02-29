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
      console.log(res.data.data, "return data");
    });
  }, []);

  const gotToPage = (idCorso: any) => {
    console.log(idCorso, "sono nel metodo goToPage");
    navigate("/course_page/" + idCorso);
  };

  return (
    <div className={`containerCourse`}>
      <Header />
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
                src={
                  course.backgroundImage
                    ? course.backgroundImage
                    : "https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"
                }
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
  );
};

export default Course;
