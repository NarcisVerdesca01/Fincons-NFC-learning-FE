import axios from "axios";
import Cookies from "js-cookie";
import Quiz from "../models/QuizModel";

const API_BASE_URL =
    "http://localhost:8080/nfc-learning";


const VERSION_URI = API_BASE_URL + "/v1";

const QUIZ_RESULTS_URI = VERSION_URI + "/quiz-student-result";

const GET_ALL_URI = QUIZ_RESULTS_URI + "/list";






const getQuizResults = async () => {
    const token = Cookies.get("jwt-token");
    try {
        const response = await axios.get(GET_ALL_URI,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return response.data;
    }
    catch (error) {
        console.log(error)
        throw error;
    }
}

const QuizResultsService = {
    getQuizResults
}

export default QuizResultsService;