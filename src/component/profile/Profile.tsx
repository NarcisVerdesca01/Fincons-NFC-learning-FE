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
        <td className={`tableUserProfileAnagraphic`}>
          <tr>Name:</tr>
          <tr>Surname:</tr>
          <tr>Email:</tr>
          <tr>Birthdate:</tr>
          <tr>Abilities:</tr>
          <tr>Courses:</tr>
          <tr>Lesson:</tr>
          <tr>Hai partecipato a:</tr>
          <tr>con punteggio:</tr>
        </td>
        <td className={`tableUserProfile`}>
          <tr>{user?.firstName}</tr>
          <tr>{user?.lastName}</tr>
          <tr>{user?.email}</tr>
          <tr>{user?.birthDate?.toString()}</tr>
          <tr>
            {abilities?.map((ability: any) => (
              <div>{ability?.ability?.name}</div>
            ))}{" "}
          </tr>
          <tr>Corsi</tr>
          <tr>Lezioni</tr>
          <tr>Quiz</tr>
          <tr>Punteggio Quiz</tr>
        </td>
      </div>
    </div>
  );
};

export default Profile;
