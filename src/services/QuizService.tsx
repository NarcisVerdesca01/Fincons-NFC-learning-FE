import axios from "axios";
import Cookies from "js-cookie";
import Quiz from "../models/QuizModel";

const API_BASE_URL =
  "http://localhost:8080/nfc-learning";
  

const VERSION_URI = API_BASE_URL + "/v1";

const QUIZ_URI = VERSION_URI + "/quiz";

const CREATE_QUIZ = QUIZ_URI + "/create";

const GET_ALL_URI= QUIZ_URI + "/list";

const GET_BY_ID = QUIZ_URI + "/find-by-id";

const SEND_QUIZ = VERSION_URI + "/quiz-student-result/calculate-and-save";

const RESEND_QUIZ = VERSION_URI + "/quiz-student-result/quiz-redo";

const ASSOCIATE_WITH_LESSON = QUIZ_URI + "/associatelesson";

const CHECK_QUIZ = VERSION_URI + "/quiz-student-result/check";

const token = Cookies.get("jwt-token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const QuizService = {

  getQuizzes() {
    return axios.get(GET_ALL_URI, config);
  },
 
 createQuiz( quiz : Quiz){
     return axios.post(CREATE_QUIZ, quiz ,{ headers: { Authorization: `Bearer ${token}` } } )
 },
 
  getQuizById(quizId: number | undefined) {
    return axios.get(GET_BY_ID + "/" + quizId, { headers: { Authorization: `Bearer ${token}` } })
  },

  sendQuizResult(quizId: number, answersMap: any) {
    const url = `${SEND_QUIZ}?quizId=${quizId}`;
    return axios.post(url, { answersMap }, { headers: { Authorization: `Bearer ${token}` } });
  },

  reSendQuizResult(quizId: number, answersMap: any) {
    const url = `${RESEND_QUIZ}?quizToRedo=${quizId}`;
    return axios.put(url, { answersMap }, { headers: { Authorization: `Bearer ${token}` } });
  },
  
  checkQuizResult(quizId: number) {
    const url = `${CHECK_QUIZ}?quizId=${quizId}`;
    return axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
  },

  associateQuizToLesson(quizId: number, lessonId: number) {
    const url = `${ASSOCIATE_WITH_LESSON}?idQuiz=${quizId}&idLesson=${lessonId}`;
    return axios.put(url,{}, { headers: { Authorization: `Bearer ${token}` } });
  },







}






export default QuizService;