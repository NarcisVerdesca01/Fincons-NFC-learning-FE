import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";

const DeleteLesson = () => {
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [lessonId, setLessonId] = useState<number | null>(null);
    const [lesson, setLesson] = useState<Lesson>();
    const navigate = useNavigate();

    useEffect(() => {
        LessonService.getLessons().then((res) => {
            setLessons(res.data);
        });
    }, []);

    useEffect(() => {
        if (lessonId !== null) {
            LessonService.getLessonById(lessonId!).then((res) => {
                setLesson(res.data);
            });
        }
    }, [lessonId]);

    const DeleteLesson = () => {
        console.log(lessonId) 
        LessonService.deleteLesson(lessonId!)
        navigate("/settings_admin");
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    return (
        <div>
            <div>
                <h3>Delete Lesson</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Lesson</label>
                            <select
                                name="course"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    console.log(Number(e.target.value))
                                    setLessonId(Number(e.target.value));
                                }}
                            >
                                <option selected>Select the Course to Delete</option>
                                {lessons.map((lesson) => {
                                    return (
                                        <option key={lesson.id} value={lesson.id}>
                                            {lesson.title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {lesson && (
                            <>
                                <div>
                                    <label>Name: </label>
                                    <p>{lesson.title}</p>
                                </div>
                                <div>
                                    <label>BackgroundImage: </label>
                                    <p>{lesson.backgroundImage}</p>
                                </div>
                                <div>
                                    <label>Created by: </label>
                                    <p>{lesson.createdBy}</p>
                                </div>
                                <button className="btn btn-success" onClick={DeleteLesson}>
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

export default DeleteLesson;