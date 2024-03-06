import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageDedicatedCourse.css";
import Header from "../header/Header";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Footer from "../footer/Footer";

const PageDedicatedCourse = () => {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const auth = Cookies.get("jwt-token");
  const decodedJwt = jwtDecode(auth!);
  const userEmail = decodedJwt.sub;
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourseByEmail(userEmail).then((res) => {
      setCourseList(res.data.data);
    });
  }, []);

  const gotToPage = (idCorso: any) => {
    navigate("/course_page/" + idCorso);
  };

  return (
    <>
      <Header />
      <div className={`containerDedicatedCourse`}>
        <div className={`containerTitleDedicatedCourse`}>
          <h1>My Course</h1>
        </div>
        <div className={`containerCardDedicatedCourse`}>
          {courseList.map((course: CourseModel) => (
            <div className={`cardDedicatedCourse`}>
              <div
                className={`containerImgCardDedicatedCourse`}
                onClick={() => gotToPage(course?.id)}
              >
                <img
                  src={
                    course.backgroundImage
                      ? course.backgroundImage
                      : "https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"
                  }
                  alt={course.name}
                  className={`imgCardDedicatedCourse`}
                />
              </div>
              <div className={`titleCardDedicatedCourse`}>
                <h3>{course.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageDedicatedCourse;
