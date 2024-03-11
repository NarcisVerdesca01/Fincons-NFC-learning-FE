import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";

const CreateCourse = () => {
    const [course, setCourse] = useState<Course>();
    const navigate = useNavigate();

    const saveCourse = () => {
        CourseService.createCourse(course!);
        navigate("/settings_admin")
    }

    const backToSettings = () => {
        navigate("/settings_admin")
    }

    return (
        <div>
            <div>
                <h3> Create Course </h3>
                <div>
                    <form>
                        <div>
                            <label>Name</label>
                            <input
                                type="string"
                                placeholder="name"
                                name="name"
                                className="form-control"
                                value={course?.name}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input
                                type="string"
                                placeholder="description"
                                name="description"
                                className="form-control"
                                value={course?.description}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
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
                                value={course?.backgroundImage}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <div>
                            <label>imageResource</label>
                            <input
                                type="string"
                                placeholder="imageResource"
                                name="imageResource"
                                className="form-control"
                                value={course?.imageResource}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
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

export default CreateCourse;
