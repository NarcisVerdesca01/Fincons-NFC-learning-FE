import axios from "axios";
import Cookies from "js-cookie";
import Answer from "../models/AnswerModel";

const API_BASE_URL =
  "http://localhost:8080/nfc-learning";
const VERSION_URI = API_BASE_URL + "/v1";
const QUESTION_URI = VERSION_URI + "/answer";
const CREATE_QUESTION = QUESTION_URI + "/create";
const GET_ALL_URI = QUESTION_URI + "/list";
const GET_ALL_URI_NO_ASSOCIATED_QUESTION = QUESTION_URI + "/list-no-association-question";

const ASSOCIATE_ANSWER_QUESTION_URI = QUESTION_URI + "/associatequestion";

const GET_BY_ID = QUESTION_URI + "/find-by-id";




const getAnswers = async () => {
  const token = Cookies.get("jwt-token");
  try {
    const response = await axios.get(GET_ALL_URI, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting lessons:", error);
    throw error;
  }
};

const getAnswerWithoutAssociationWithQuestion = async () => {
  const token = Cookies.get("jwt-token");
  try {
    const response = await axios.get(GET_ALL_URI_NO_ASSOCIATED_QUESTION, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting lessons:", error);
    throw error;
  }
};

const createAnswer = async (quiz: Answer) => {
  const token = Cookies.get("jwt-token");
  try {
    const response = await axios.post(CREATE_QUESTION, quiz, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error getting lessons:", error);
    throw error;
  }
};

const getAnswerById = async (quizId: number | undefined) => {
  const token = Cookies.get("jwt-token");
  try {
    const response = await axios.get(GET_BY_ID + "/" + quizId, { headers: { Authorization: `Bearer ${token}` } })
    return response.data;
  } catch (error) {
    console.error("Error getting lessons:", error);
    throw error;
  }
};

const associateAnswerQuestion = async (answerId: number, questionId: number) => {
  const token = Cookies.get("jwt-token");
  const url = `${ASSOCIATE_ANSWER_QUESTION_URI}?idAnswer=${answerId}&idQuestion=${questionId}`;
  try {
    const response = await axios.put(url, {}, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    console.error("Error associate the answer to the question:", error);
    throw error;
  }
};

const AnswerService = {
  getAnswers,
  getAnswerWithoutAssociationWithQuestion,
  createAnswer,
  getAnswerById,
  associateAnswerQuestion,
}

export default AnswerService;