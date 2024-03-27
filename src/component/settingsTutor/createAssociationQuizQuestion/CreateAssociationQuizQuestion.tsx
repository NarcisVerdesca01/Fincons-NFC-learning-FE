import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseLessonService from "../../../services/CourseLessonService";
import Quiz from "../../../models/QuizModel";
import Lesson from "../../../models/LessonModel";
import QuizService from "../../../services/QuizService";
import QuestionService from "../../../services/QuestionService";
import QuestionModel from "../../../models/QuestionModel";


const CreateAssociationQuizQuestion = () => {
    const [quizId, setQuizId] = useState<number | any>();
    const [questionId, setQuestionId] = useState<number | any>();
    const [questions, setQuestions] = useState<QuestionModel | any>();
    const [quiz, setQuiz] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        QuizService.getQuizzes().then((res1) => {
            setQuiz(res1.data);
        })
    }, []);

    useEffect(() => {
        QuestionService.getQuestionsWithoutAssociationWithQuiz().then((res2) => {
            setQuestions(res2.data);
        })
    }, []);

  

    const saveQuizQuestion = () => {
        QuizService.associateQuizToQuestion(quizId, questionId);
        navigate("/settings_tutor")        
    }

    const backToSettingsCourseLesson = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Associate Quiz with Question </h3>
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
                            <label>Question</label>
                            <select
                                name="question"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setQuestionId(parseInt(e.target.value));}}>
                                <option selected>Select the Question</option>
                                {questions?.map((question: QuestionModel, index: any) => {
                                    return (
                                        <option key={index} value={question?.id}>{question?.textQuestion}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveQuizQuestion}>add</button>
                        <button className='btn btn-danger' onClick={backToSettingsCourseLesson}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssociationQuizQuestion;
