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
      <Header />
      <div className={`containerCourse`}>
        <div className={`containerTitleCourse`}>
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
      </div>
      <div className={`containerCourse`}>
        <div className={`containerContextCourse`}>
          <div className={`titleResources`}>
            <h1>Resources</h1>
          </div>
        </div>
        <div className={`containerResources`}>
          <div className={`descriptionResources`}>
            <h4> This Resources will be utlity fo your study</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageCourse;
