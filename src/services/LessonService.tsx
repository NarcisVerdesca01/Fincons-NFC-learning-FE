import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/CourseModel";
import Lesson from "../models/LessonModel";

const LESSON_API_BASE_URL =
    "http://localhost:8080/nfc-learning";
const VERSION_URI = LESSON_API_BASE_URL + "/v1";
const LESSON_URI = VERSION_URI + "/lesson";
const GET_ALL_URI = LESSON_URI + "/list";
const GET_BY_ID = LESSON_URI + "/find-by-id"
const CREATE_LESSON = LESSON_URI + "/add"
const UPDATE_LESSON = LESSON_URI + "/update"
const DELETE_LESSON = LESSON_URI + "/delete"

const token = Cookies.get("jwt-token");
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

const LessonService = {
    getLessons() {
        return axios.get(GET_ALL_URI, config);
    },

    getLessonById(lessonId: number | undefined) {
        return axios.get(GET_BY_ID + "/" + lessonId, { headers: { Authorization: `Bearer ${token}` } })
    },
    createLesson(course: Lesson) {
        return axios.post(CREATE_LESSON, course, config)
    },

    updateCourse(lessonId: number, updatedLesson: Lesson) {
        return axios.put(
            UPDATE_LESSON,
            {
                name: updatedLesson,
            },
            {
                params: { id: lessonId },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
    },

    deleteLesson(lessonId: number | undefined) {
        return axios.delete(DELETE_LESSON, { params: { id: lessonId } })
    }
}

export default LessonService;