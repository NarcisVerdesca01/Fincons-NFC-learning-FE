import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./Course.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Course = () => {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourseList(res.data);
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
          <h1 className={`title-course`}>Courses</h1>
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
      <Footer/>
    </>
  );
};

export default Course;
