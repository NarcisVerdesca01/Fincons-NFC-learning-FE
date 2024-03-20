import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LoginRegistrationService from "../../services/LoginRegistrationService";
import Header from "../header/Header";
import User from "../../models/UserModel";
import UserDetailModels from "../../models/UserDetailsModel";
import "./Profile.css";
import Course from "../../models/CourseModel";
import Ability from "../../models/AbilityModel";
import Quiz from "../../models/QuizModel";
import Lesson from "../../models/LessonModel";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [quiz, setQuiz] = useState<Quiz>();
  const [userDetails, setUserDetails] = useState<UserDetailModels>();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [course, setCourse] = useState<Course>();
  const [lesson, setLesson] = useState<Lesson>();

  useEffect(() => {
    LoginRegistrationService.getUserDetails().then((res) => {
      console.log(res.data, "get userDetails");
      setUser(res.data);
      setAbilities(res.data.abilities);
      setCourse(res.data.abilities[0].courses);
      setLesson(res);
    });
  }, []);

  
  return (
    <div className={`componentPageProfile`}>
      {/* <Header />*/}
      <div className={`containerUserProfile`}>
        <div className={`containerMenu`}>
          <div className={`userDetails`}>
            <p>
              Name: <br></br>
              {user?.firstName} {user?.lastName}
            </p>
            <p>
              Email: <br></br>
              {user?.email}
            </p>
          </div>

          <div className={`userDetails`}>
            <p>Birthdate:{user?.birthDate?.toString()}</p>
          </div>

          <div className={`userDetails`}>
            Abilities:
            {/*   {abilities?.map((ability: any) => (
                <div>{ability?.ability.name}</div>
           ))}*/}
          </div>

          <div className={`userDetails`}>
            <p>Courses:</p>
            {course?.name}
          </div>
          <div className={`userDetails`}>
            <p>Lessons:</p>
          </div>
          <div className={`userDetails`}>
            <p>
              Hai partecipato a: {quiz?.title} <br></br>con punteggio: {}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
