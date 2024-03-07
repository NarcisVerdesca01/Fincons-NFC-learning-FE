import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";

const CreateLesson = () => {
    const [lesson, setLesson] = useState<Lesson>();
    const navigate = useNavigate();

    const saveCourse = () => {
        LessonService.createLesson(lesson!);
        navigate("/settings_admin")
    }

    const backToSettings = () => {
        navigate("/settings_admin")
    }

    return (
        <div>
            <div>
                <h3> Create Lesson </h3>
                <div>
                    <form>
                        <div>
                            <label>Title</label>
                            <input
                                type="string"
                                placeholder="title"
                                name="title"
                                className="form-control"
                                value={lesson?.title}
                                onChange={(e) => {
                                    setLesson({
                                        ...lesson!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <div>
                            <label>backgroundImage</label>
                            <input
                                type="string"
                                placeholder="backgroundImage"
                                name="backgroundImage"
                                className="form-control"
                                value={lesson?.backgroundImage}
                                onChange={(e) => {
                                    setLesson({
                                        ...lesson!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <button className='btn btn-success' onClick={saveCourse}>add</button>
                        <button className='btn btn-danger' onClick={backToSettings}>back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateLesson;
