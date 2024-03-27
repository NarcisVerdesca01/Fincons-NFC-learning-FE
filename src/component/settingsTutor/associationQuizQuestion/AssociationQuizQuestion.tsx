import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../../../models/QuizModel";
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
    });
  }, []);

  useEffect(() => {
    QuestionService.getQuestionsWithoutAssociationWithQuiz().then((res2) => {
      setQuestions(res2.data);
    });
  }, []);

  const saveQuizQuestion = () => {
    console.log("id quiz: ", quizId);
    console.log("id ESTION:", questionId);
    QuizService.associateQuizToQuestion(quizId, questionId);
    navigate("/settings_tutor");
  };

  const backToSettingsCourseLesson = () => {
    navigate("/settings_tutor");
  };

  return (
    <div>
      <h3 className="titleModal"> Associate Quiz with Question </h3>
      <form>
        <div className="form-group">
          <label className="labelModal">Quiz</label>
          <select
            name="quiz"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setQuizId(parseInt(e.target.value));
            }}
          >
            <option selected>Select the Quiz</option>
            {quiz?.map((quizzes: Quiz, index: any) => {
              return (
                <option key={index} value={quizzes.id}>
                  {quizzes?.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="labelModal">Question</label>
          <select
            name="question"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setQuestionId(parseInt(e.target.value));
            }}
          >
            <option selected>Select the Question</option>
            {questions?.map((question: QuestionModel, index: any) => {
              return (
                <option key={index} value={question?.id}>
                  {question?.textQuestion}
                </option>
              );
            })}
          </select>
        </div>
        <div className="containerButtonModal">
          <button className="buttonCheck" onClick={saveQuizQuestion}>
            <span className="frontCheck">
              <i className="bi bi-check2"></i>
            </span>
          </button>
          <button className="buttonReturn" onClick={backToSettingsCourseLesson}>
            <span className="frontReturn">
              <i className="bi bi-arrow-left"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssociationQuizQuestion;
