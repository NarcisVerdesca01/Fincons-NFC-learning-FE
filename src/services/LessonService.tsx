import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/CourseModel";
import Lesson from "../models/LessonModel";

const LESSON_API_BASE_URL = "http://localhost:8080/nfc-learning";
const VERSION_URI = LESSON_API_BASE_URL + "/v1";
const LESSON_URI = VERSION_URI + "/lesson";
const GET_ALL_URI = LESSON_URI + "/list";
const GET_BY_ID = LESSON_URI + "/find-by-id";
const CREATE_LESSON = LESSON_URI + "/add";
const UPDATE_LESSON = LESSON_URI + "/update";
const DELETE_LESSON = LESSON_URI + "/delete";

const token = Cookies.get("jwt-token");
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

const getLessons = async () => {
    try {
        const response = await axios.get(GET_ALL_URI, config);
        return response.data;
    } catch (error) {
        console.error("Error getting lessons:", error);
        throw error;
    }
};

const getLessonById = async (lessonId: number) => {
    try {
        const response = await axios.get(GET_BY_ID + "/" + lessonId, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.error("Error getting lesson by ID:", error);
        throw error;
    }
};

const createLesson = async (lesson: Lesson) => {
    try {
        const response = await axios.post(CREATE_LESSON, lesson, config);
        return response.data;
    } catch (error) {
        console.error("Error creating lesson:", error);
        throw error;
    }
};

const updateLesson = async (lessonId: number, updatedLesson: Lesson) => {
    try {
        const response = await axios.put(
            UPDATE_LESSON + "/" + lessonId,
            {
                title: updatedLesson.title,
                backgroundImage: updatedLesson.backgroundImage
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating lesson:", error);
        throw error;
    }
};

const deleteLesson = async (lessonId: number | undefined) => {
    try {
        const response = await axios.delete(DELETE_LESSON, { params: { id: lessonId } });
        return response.data;
    } catch (error) {
        console.error("Error deleting lesson:", error);
        throw error;
    }
};

const LessonService = {
    getLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson
};

export default LessonService;