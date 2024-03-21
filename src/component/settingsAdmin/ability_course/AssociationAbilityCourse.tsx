import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseLessonService from "../../../services/CourseLessonService";
import Course from "../../../models/CourseModel";
import Lesson from "../../../models/LessonModel";
import CourseService from "../../../services/CourseService";
import LessonService from "../../../services/LessonService";
import CourseLessonModel from "../../../models/CourseLessonModel";
import AbilityCourse from "../../../models/AbilityCourse";
import AbilityService from "../../../services/AbilityService";
import AbilityCourseService from "../../../services/AbilityCourseService";
import Ability from "../../../models/AbilityModel";

const CreateAssociationCourseLesson = () => {
    const [abilityCourse, setAbilityCourse] = useState<AbilityCourse>();
    const [course, setCourse] = useState<any>();
    const [ability, setAbility] = useState<any>();
    const [courseId, setCourseId] = useState<any>();
    const [abilityId, setAbilityId] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        CourseService.getCourses().then((res) => {
            setCourse(res.data);
        })
    }, []);

    useEffect(() => {
        AbilityService.getAbilities().then((res) => {
            setAbility(res.data);
        })
    }, []);

    const saveCourseLesson = () => {
        console.log("ability id ", abilityId)
        console.log("course id ", courseId)
        AbilityCourseService.createAbilityCourse(abilityId.ability, courseId.course);
        navigate("/settings_admin");
    }

    const backToSettingsCourseLesson = () => {
        navigate("/settings_admin");
    }

    return (
        <div>
            <div>
                <h3> Associate Course with Ability </h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Course</label>
                            <select
                                name="course"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    console.log(Number(e.target.value))
                                    setCourseId({
                                        [e.target.name]: e.target.value
                                    });
                                }}
                            >
                                <option selected>Select the Course</option>
                                {course?.map((courses: Course, index: any) => {
                                    return (
                                        <option key={index} value={courses.id}>{courses.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Ability</label>
                            <select
                                name="ability"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setAbilityId({
                                        [e.target.name]: e.target.value
                                    });
                                }}
                            >
                                <option selected>Select the Ability</option>
                                {ability?.map((ability: Ability, index: any) => {
                                    return (
                                        <option key={index} value={ability.id}>{ability.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className='btn btn-success' onClick={saveCourseLesson}>add</button>
                        <button className='btn btn-danger' onClick={backToSettingsCourseLesson}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssociationCourseLesson;