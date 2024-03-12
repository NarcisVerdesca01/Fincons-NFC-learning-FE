import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/CourseModel";

const COURSE_API_BASE_URL =
    "http://localhost:8080/nfc-learning";
const VERSION_URI = COURSE_API_BASE_URL + "/v1";
const COURSE_URI = VERSION_URI + "/course";
const GET_ALL_URI = COURSE_URI + "/list";
const GET_BY_ID = COURSE_URI + "/find-by-id"
const CREATE_COURSE = COURSE_URI + "/create"
const UPDATE_COURSE = COURSE_URI + "/update"
const DELETE_COURSE = COURSE_URI + "/delete"
const DEDICATED_COURSE = COURSE_URI + "/dedicated-courses"

const token = Cookies.get("jwt-token");
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

const CourseService = {
    getCourses() {
        return axios.get(GET_ALL_URI, config);
    },

    getCourseById(courseId: number | undefined) {
        return axios.get(GET_BY_ID + "/" + courseId, { headers: { Authorization: `Bearer ${token}` } })
    },
    
    getCourseByEmail() {
        return axios.get(DEDICATED_COURSE, { headers: { Authorization: `Bearer ${token}` } })
    },

    createCourse(course: Course) {
        return axios.post(CREATE_COURSE, course, config)
    },

    updateCourse(courseId: number, updatedCourse: Course) {
        return axios.put(
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
    },

    deleteCourse(courseId: number | undefined) {
        return axios.delete(DELETE_COURSE, { params: { id: courseId } })
    }
}

export default CourseService;