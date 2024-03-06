import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const BASE_URL = "http://localhost:8080/nfc-learning";
const VERSION_URI = BASE_URL + "/v1";
const token = Cookies.get("jwt-token");
const GET_USER_DETAILS_URI = VERSION_URI + "/email";



    export const getUserDetails = async () => {
        try {
            const decodedToken = jwtDecode(token!)
            console.log(decodedToken)
            const response = await axios.get(GET_USER_DETAILS_URI, {
                params: { email: decodedToken.sub },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Access-Control-Allow-Origin": "*"
                }
            })
            console.log(decodedToken.sub)
            return response.data
            
        } catch (error) {
            console.log(error)
            console.log("error")
        }
    }


