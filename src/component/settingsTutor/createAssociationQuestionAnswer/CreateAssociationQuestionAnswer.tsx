import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseLessonService from "../../../services/CourseLessonService";
import Quiz from "../../../models/QuizModel";
import Lesson from "../../../models/LessonModel";
import QuizService from "../../../services/QuizService";
import QuestionService from "../../../services/QuestionService";
import AnswerService from "../../../services/AnswerService";
import Question from "../../../models/QuestionModel";
import Answer from "../../../models/AnswerModel";


const CreateAssociationQuestionAnswer = () => {
    const [questionId, setQuestionId] = useState<number | any>();
    const [answerId, setAnswerId] = useState<number | any>();
    const [questions, setQuestions] = useState<Question | any>();
    const [answers, setAnswers] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        QuestionService.getQuestions().then((res1) => {
            setQuestions(res1.data);
        })
    }, []);

    useEffect(() => {
        AnswerService.getAnswerWithoutAssociationWithQuestion().then((res2) => {
            setAnswers(res2.data);
        })
    }, []);

  

    const saveQuestionAnswer = () => {
        console.log("id question: ",questionId)
        console.log("id answer:", answerId)
        AnswerService.associateAnswerQuestion(answerId, questionId);
        navigate("/settings_tutor")        
    }

    const backToSettingsCourseLesson = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Associate Question with Answer </h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Question</label>
                            <select
                                name="question"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setQuestionId(parseInt(e.target.value));}}>
                                <option selected>Select the Question</option>
                                {questions?.map((question: Question, index: any) => {
                                    return (
                                        <option key={index} value={question.id}>{question?.textQuestion}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Answer</label>
                            <select
                                name="answer"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setAnswerId(parseInt(e.target.value));}}>
                                <option selected>Select the Answer</option>
                                {answers?.map((answer: Answer, index: any) => {
                                    return (
                                        <option key={index} value={answer?.id}>{answer?.text}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveQuestionAnswer}>add</button>
                        <button className='btn btn-danger' onClick={backToSettingsCourseLesson}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssociationQuestionAnswer;
