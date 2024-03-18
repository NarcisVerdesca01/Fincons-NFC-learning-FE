import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";
import './CreateLesson.css'

const CreateLesson = () => {
    const [lesson, setLesson] = useState<Lesson>();
    const navigate = useNavigate();
    const [createDisabled, setCreateDisabled] = useState(true);
    const [titleError, setTitleError] = useState(false);

    const saveLesson = () => {
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
                                placeholder={lesson?.title}
                                name="name"
                                className={`form-control ${titleError ? 'border-red-500' : ''}`}
                                value={lesson?.title}
                                onChange={(e) => {
                                    if (e.target.value.length > 255) {
                                        setTitleError(true);
                                    } else {
                                        setTitleError(false);
                                    }
                                    setLesson({
                                        ...lesson!,
                                        title: e.target.value
                                    });
                                    setCreateDisabled(e.target.value.length === 0 || titleError);
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
                                    console.log(lesson?.backgroundImage)
                                    setLesson({
                                        ...lesson!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <button className='btn btn-success' disabled={createDisabled} onClick={saveLesson}>add</button>
                        <button className='btn btn-danger' onClick={backToSettings}>back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateLesson;
