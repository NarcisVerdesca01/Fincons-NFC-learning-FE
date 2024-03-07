import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const BASE_URL = "http://localhost:8080/nfc-learning";
const VERSION_URI = BASE_URL + "/v1";
const UPDATE_PASSWORD_URI = VERSION_URI + "/update-user-password";
const DETAILS_USER = VERSION_URI + "/email";
const token = Cookies.get("jwt-token");

const UserService = {

    updateUserPassword(userEmail: string, oldPassword: string, newPassword: string) {
        return axios.put(
            UPDATE_PASSWORD_URI, {}, {
            params: {
                email: userEmail,
                password: oldPassword,
                newPassword: newPassword
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        );
    },

    getUserDetails(email: string){
        return axios.get(
            DETAILS_USER,
            {
                params:{
                    email: email
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            

        )
    }
}


export default UserService;