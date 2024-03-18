import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import './UpdateCourse.css'

const UpdateCourse = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
    const [course, setCourse] = useState<Course>();
    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionError, setDescriptionError] = useState(false);
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
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

    const DeleteCourse = () => {
        if (nameError || descriptionError) {
            return;
        }

        CourseService.deleteCourse(selectedCourseId!);
        navigate("/settings_admin");
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    return (
        <div>
            <div>
                <h3>Delete Course</h3>
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
                                <option selected>Select the Course to Delete</option>
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
                                    <label>Name: </label>
                                    <p>{course.name}</p>
                                </div>
                                <div>
                                    <label>Description: </label>
                                    <p>{course.description}</p>
                                </div>
                                <div>
                                    <label>backgroundImage: </label>
                                    <p>{course.backgroundImage}</p>
                                </div>
                                <div>
                                    <label>imageResource: </label>
                                    <p>{course.imageResource}</p>
                                </div>
                                <button type="button" className="btn btn-success" onClick={DeleteCourse}>
                                    delete
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