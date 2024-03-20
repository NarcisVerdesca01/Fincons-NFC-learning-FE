import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseLessonService from "../../../services/CourseLessonService";
import Quiz from "../../../models/QuizModel";
import Lesson from "../../../models/LessonModel";
import QuizService from "../../../services/QuizService";
import LessonService from "../../../services/LessonService";
import QuizLessonModel from "../../../models/QuizLessonModel";


const CreateAssociationQuizLesson = () => {
    const [quizLesson, setQuizLesson] = useState<QuizLessonModel | any>();
    const [quizId, setQuizId] = useState<number | any>();
    const [lessonId, setLessonId] = useState<number | any>();
    const [lesson, setLesson] = useState<QuizLessonModel | any>();
    const [quiz, setQuiz] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        QuizService.getQuizzes().then((res1) => {
            setQuiz(res1.data);
        })
    }, []);

    useEffect(() => {
        LessonService.getLessons().then((res2) => {
            setLesson(res2.data);
        })
    }, []);

    const saveQuizLesson = () => {
        console.log("id quiz: ",quizId)
        console.log("id lesson:", quizLesson)
        QuizService.associateQuizToLesson(quizId, lessonId);
        navigate("/settings_tutor")        
    }

    const backToSettingsCourseLesson = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Associate Quiz with Lesson </h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Quiz</label>
                            <select
                                name="quiz"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setQuizId(parseInt(e.target.value));}}>
                                <option selected>Select the Quiz</option>
                                {quiz?.map((quizzes: Quiz, index: any) => {
                                    return (
                                        <option key={index} value={quizzes.id}>{quizzes?.title}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Lesson</label>
                            <select
                                name="lesson"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setLessonId(parseInt(e.target.value));}}>
                                <option selected>Select the Lesson</option>
                                {lesson?.map((lesson: Lesson, index: any) => {
                                    return (
                                        <option key={index} value={lesson?.id}>{lesson?.title}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveQuizLesson}>add</button>
                        <button className='btn btn-danger' onClick={backToSettingsCourseLesson}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssociationQuizLesson;
