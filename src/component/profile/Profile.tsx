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
        <table className="table">
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Name:</td>
              <td>{user?.firstName}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Surname:</td>
              <td>{user?.lastName}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Email:</td>
              <td>{user?.email}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Birthdate:</td>
              <td>{user?.birthDate?.toString()}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Ability:</td>
              <td>
                {abilities?.map((ability: any) => (
                  <div>{ability?.ability?.name}</div>
                ))}{" "}
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Course:</td>
              <td>corsi</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Lesson:</td>
              <td>lezioni</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Hai partecipato a::</td>
              <td>quiz</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Con punteggio:</td>
              <td>punteggio quiz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
