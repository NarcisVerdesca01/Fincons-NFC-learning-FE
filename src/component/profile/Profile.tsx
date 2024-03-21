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
      setCourse(res.data);
      setLesson(res);
    });
  }, []);

  return (
    <div className={`componentPageProfile`}>
      {/* <Header />*/}
      <div className={`containerTitleProfile`}>
        <h3 className={`titleHeaderProfile`}>User Details:</h3>
      </div>
      <div className={`containerUserProfile`}>
        <div className={`containerMenuProfile`}>
          <div className={`userDetails`}>
            <p className={`profileAnagraphic`}>Name:</p>
            <p className={`profileAnagraphic`}>Surname:</p>
            <p className={`profileAnagraphic`}>Email:</p>
            <p className={`profileAnagraphic`}>Birthdate:</p>
            <p className={`profileAnagraphic`}>Abilities:</p>
            <p className={`profileAnagraphic`}>Courses:</p>
            <p className={`profileAnagraphic`}>Lessons:</p>
            <p className={`profileAnagraphic`}>
              Hai partecipato a:
              <br></br>con punteggio: {}
              <br></br>
            </p>
          </div>
        </div>

        <div className={`containerMenu`}>
          <div className={`userDetails`}>
            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
            <p>{user?.email}</p>
            <p>{user?.birthDate?.toString()}</p>
            <p>
              {abilities?.map((ability: any) => (
                <div>{ability?.ability?.name}</div>
              ))}{" "}
            </p>

            <p>corsi</p>
            <p>lezioni</p>
            <p>quiz{quiz?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
