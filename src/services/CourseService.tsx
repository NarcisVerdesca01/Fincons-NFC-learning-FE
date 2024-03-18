import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/CourseModel";

const COURSE_API_BASE_URL = "http://localhost:8080/nfc-learning";
const VERSION_URI = COURSE_API_BASE_URL + "/v1";
const COURSE_URI = VERSION_URI + "/course";
const GET_ALL_URI = COURSE_URI + "/list";
const GET_BY_ID = COURSE_URI + "/find-by-id";
const CREATE_COURSE = COURSE_URI + "/create";
const UPDATE_COURSE = COURSE_URI + "/update";
const DELETE_COURSE = COURSE_URI + "/delete";
const DEDICATED_COURSE = COURSE_URI + "/dedicated-courses";

const token = Cookies.get("jwt-token");
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

const getCourses = async () => {
    try {
        const response = await axios.get(GET_ALL_URI, config);
        return response.data;
    } catch (error) {
        console.error("Error getting courses:", error);
        throw error;
    }
};

const getCourseById = async (courseId: number) => {
    try {
        const response = await axios.get(GET_BY_ID + "/" + courseId, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.error("Error getting course by ID:", error);
        throw error;
    }
};

const getCourseByEmail = async () => {
    try {
        const response = await axios.get(DEDICATED_COURSE, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.error("Error getting course by email:", error);
        throw error;
    }
};

const createCourse = async (course: Course) => {
    try {
        const response = await axios.post(CREATE_COURSE, course, config);
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
};

const updateCourse = async (courseId: number, updatedCourse: Course) => {
    try {
        const response = await axios.put(
            UPDATE_COURSE + "/" + courseId,
            {
                name: updatedCourse.name,
                description: updatedCourse.description,
                backgroundImage: updatedCourse.backgroundImage,
                imageResource: updatedCourse.imageResource
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
        console.error("Error updating course:", error);
        throw error;
    }
};

const deleteCourse = async (courseId: number | undefined) => {
    try {
        const response = await axios.put(DELETE_COURSE, { params: { id: courseId } });
        return response.data;
    } catch (error) {
        console.error("Error deleting course:", error);
        throw error;
    }
};

const CourseService = {
    getCourses,
    getCourseById,
    getCourseByEmail,
    createCourse,
    updateCourse,
    deleteCourse
};

export default CourseService;