import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./PageCourse.css";
import Header from "../header/Header";
import Ability from "../../models/AbilityModel";
import AbilityService from "../../services/AbilityService";

const PageCourse = () => {
  const [course, setCourse] = useState<CourseModel>();

  const navigate = useNavigate();
  const { idCourse } = useParams();
  const idCourse_page = parseInt(idCourse!);
  useEffect(() => {
    CourseService.getCourseById(idCourse_page).then((res) => {
      setCourse(res.data.data);
    });
  }, [idCourse]);

  return (
    <>
      <div className={`containerCourse`}>
        <Header />
        <div className={`containerTitleCourse`}>
          <h1>{course?.name}</h1>
        </div>
        <div className={`containerContextCourse`}>
          <div className={`imageCardCourse`}>
            <img src={course?.backgroundImage} alt="" className="imageStyle" />
          </div>
          <div className={`textCourse`}>
            <p className={`textCourse2`}>
              The “Java” course was created with the aim of teaching you how to
              become a Java programmer in a very short time and in the simplest
              and most linear way possible. Never programmed before? No problem!
              We start from scratch, therefore from the basics of programming
              and with a little perseverance you will be able to learn all the
              main syntax of the language.
            </p>
          </div>
        </div>
      </div>
      <div className={`containerCourse`}>
        <div className={`containerContextCourse`}>
          <div className={`titleResources`}>
            <h1>Resources</h1>
          </div>
        </div>
        <div className={`containerResources`}>
          <div>Resources</div>
          <div>Resources</div>
          <div>Resources</div>
        </div>
      </div>
    </>
  );
};

export default PageCourse;
