import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/CourseModel";
import AbilityCourse from "../models/AbilityCourse";

const ABILITY_USER_API_BASE_URL = "http://localhost:8080/nfc-learning";
const VERSION_URI = ABILITY_USER_API_BASE_URL + "/v1";
const ABILITY_USER_URI = VERSION_URI + "/ability-user";
const GET_ALL_URI = ABILITY_USER_URI + "/list";
const GET_BY_ID = ABILITY_USER_URI + "/find-by-id";
const CREATE_ABILITY_USER = ABILITY_USER_URI + "/add";
const DELETE_ABILITY_USER = ABILITY_USER_URI + "/delete";


const getAbilityUser = async () => {
    const token = Cookies.get("jwt-token");
    try {
        const response = await axios.get(
            GET_ALL_URI,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error getting courses:", error);
        throw error;
    }
};

const getAbilityUserById = async (abilityCourseId: number | undefined) => {

    const token = Cookies.get("jwt-token");
    try {
        const response = await axios.get(
            GET_BY_ID + "/" + abilityCourseId,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error getting course by ID:", error);
        throw error;
    }
};

const createAbilityUser = async (idAbility: number) => {

    const token = Cookies.get("jwt-token");
    try {
        const response = await axios.post(
            CREATE_ABILITY_USER,
            {},
            {
                params:  {
                    abilityId: idAbility
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
                
        );
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
};



const deleteAbilityUser = async (courseId: number) => {

    const token = Cookies.get("jwt-token");
    try {
        const response = await axios.put(
            DELETE_ABILITY_USER,
            {},
            {
                params: {
                    id: courseId
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting course:", error);
        throw error;
    }
};

const AbilityUserService = {
    getAbilityUser,
    getAbilityUserById,
    createAbilityUser,
    deleteAbilityUser
};

export default AbilityUserService;