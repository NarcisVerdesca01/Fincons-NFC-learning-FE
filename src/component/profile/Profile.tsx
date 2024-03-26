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
import ButtonShowQuizForStudent from "../settingsStudent/buttonSettingsStudent/ButtonShowQuizForStudent";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [quiz, setQuiz] = useState<Quiz>();
  const [userDetails, setUserDetails] = useState<UserDetailModels>();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [course, setCourse] = useState<Course>();
  const [lesson, setLesson] = useState<Lesson>();
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    LoginRegistrationService.getUserDetails().then((res) => {
      console.log(res.data, "get userDetails");
      setUser(res.data);
      setAbilities(res.data.abilities);
      setCourse(res.data);
      setLesson(res);
      setIsStudent(res.data?.roles[0].name === 'ROLE_STUDENT'); 
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
              <td className={`title-profile`}>Name:</td>
              <td>{user?.firstName || 'N/A'}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className={`title-profile`}>Surname:</td>
              <td>{user?.lastName || 'N/A'}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className={`title-profile`}>Email:</td>
              <td>{user?.email || 'N/A'}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className={`title-profile`}>Birthdate:</td>
              <td>{user?.birthDate?.toString() || 'N/A'}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className={`title-profile`}>Ability:</td>
              <td>
                {abilities?.map((ability: any) => (
                  <div>{ability?.ability?.name != null || undefined ?  ability?.ability?.name : 'N/A'}</div>
                ))}{" "}
              </td>
            </tr>
            {isStudent && (
              <tr>
                <th scope="row"></th>
                <td className={`title-profile`}>Performed quizzes:</td>
                <ButtonShowQuizForStudent />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
