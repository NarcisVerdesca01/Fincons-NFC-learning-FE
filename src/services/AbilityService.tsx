import axios from "axios";
import Cookies from "js-cookie";
import Ability from "../models/AbilityModel";

const ABILITY_API_BASE_URL =
    "http://localhost:8080/nfc-learning";
const VERSION_URI = ABILITY_API_BASE_URL + "/v1";
const ABILITY_URI = VERSION_URI + "/ability";
const GET_ALL_URI = ABILITY_URI + "/list";
const GET_BY_ID = ABILITY_URI + "/find-by-id"
const CREATE_ABILITY = ABILITY_URI + "/create"
const UPDATE_ABILITY = ABILITY_URI + "/update"
const DELETE_ABILITY = ABILITY_URI + "/delete"

const token = Cookies.get("jwt-token");
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

const AbilityService = {
    getAbilities() {
        return axios.get(GET_ALL_URI, config);
    },

    getAbilityById(abilityId: number | undefined) {
        return axios.get(GET_BY_ID + "/" + abilityId, { headers: { Authorization: `Bearer ${token}` } })
    },

    createAbility(ability: Ability) {
        return axios.post(CREATE_ABILITY, ability, config)
    },

    updateAbility(abilityId: number, updatedAbility: Ability) {
        return axios.put(
            UPDATE_ABILITY + "/" + abilityId,
            {
                name: updatedAbility.name
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
    },

    deleteAbility(abilityId: number | undefined) {
        return axios.delete(DELETE_ABILITY, { params: { id: abilityId } })
    }
}

export default AbilityService;