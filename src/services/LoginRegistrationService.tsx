import axios from "axios";
import Cookies from "js-cookie";
import UserDetailsModel from "../models/UserDetailsModel";
import User from "../models/UserModel";
import LoginUserModel from "../models/LoginUserModel";

const REGISTRATION_LOGIN_BASE_URI =
  "http://localhost:8080/nfc-learning";
const VERSION_URI = REGISTRATION_LOGIN_BASE_URI + "/v1/auth";
const REGISTRATION_STUDENT_URI = VERSION_URI + "/student/register";
const REGISTRATION_TUTOR_URI = VERSION_URI + "/tutor/register";
const LOGIN_URI = VERSION_URI + "/login";
const USER_DETAILS_URI = VERSION_URI + "/email";
const UPDATE_USER_DETAILS = VERSION_URI + "/update-user"
const token = Cookies.get("jwt-token")

const LoginRegistrationService = {
  registrationStudentService(user: User) {
    return axios.post(REGISTRATION_STUDENT_URI, user);
  },

  registrationTutorService(user: User) {
    return axios.post(
      REGISTRATION_TUTOR_URI,
      user,
      {
        headers: { Authorization: `Bearer ${token}`}
      }
      );
  },

  updateUserData(updatedUserDetails : UserDetailsModel){
    return axios.put(
      UPDATE_USER_DETAILS,
      {
        firstName: updatedUserDetails.firstName,
        lastName: updatedUserDetails.lastName,
        email: updatedUserDetails.email,
        password: updatedUserDetails.password
      },
      {
        params: { email: updatedUserDetails.email },
        headers: { Authorization: `Bearer ${token}`}
      }
    )
  },

  loginService(loginInput: LoginUserModel) {
    return axios.post(
      LOGIN_URI,
      loginInput
    )
  },

  getUserDetails(userEmail: string | undefined) {
    return axios.get(USER_DETAILS_URI, {
      params: { email: userEmail },
      headers: { Authorization: `Bearer ${token}`}
    });
  },
};

export default LoginRegistrationService;
