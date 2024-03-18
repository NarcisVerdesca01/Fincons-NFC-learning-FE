import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";

const UpdateCourse = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
    const [course, setCourse] = useState<Course>();
    const navigate = useNavigate();

    useEffect(() => {
        CourseService.getCourses().then((res) => {
            setCourses(res.data);
        });
    }, []);

    useEffect(() => {
        if (selectedCourseId !== null) {
            CourseService.getCourseById(selectedCourseId).then((res) => {
                setCourse(res.data);
            });
        }
    }, [selectedCourseId]);

    const UpdateCourse = () => {
            CourseService.updateCourse(selectedCourseId!, course!);
            navigate("/settings_admin");
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    return (
        <div>
            <div>
                <h3>Update Course</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Course</label>
                            <select
                                name="course"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setSelectedCourseId(Number(e.target.value));
                                }}
                            >
                                <option selected>Select the Course to update</option>
                                {courses.map((course) => {
                                    return (
                                        <option key={course.id} value={course.id}>
                                            {course.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {course && (
                            <>
                                <div>
                                    <label>Name</label>
                                    <input
                                        type="string"
                                        placeholder={course.name}
                                        name="name"
                                        className="form-control"
                                        value={course.name}
                                        onChange={(e) => {
                                            setCourse({
                                                ...course,
                                                name: e.target.value
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
                                        value={course.description}
                                        onChange={(e) => {
                                            setCourse({
                                                ...course,
                                                description: e.target.value
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
                                        value={course.backgroundImage}
                                        onChange={(e) => {
                                            setCourse({
                                                ...course,
                                                backgroundImage: e.target.value
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
                                        value={course.imageResource}
                                        onChange={(e) => {
                                            setCourse({
                                                ...course,
                                                imageResource: e.target.value
                                            });
                                        }}
                                    ></input>
                                </div>
                                <button type="button" className="btn btn-success" onClick={UpdateCourse}>
                                    update
                                </button>
                                <button className="btn btn-danger" onClick={backToSettings}>
                                    back
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourse;