import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionService from "../../../services/QuestionService";
import Question from "../../../models/QuestionModel";

const DeleteQuestionTutor = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);
  const [question, setQuestion] = useState<Question>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    QuestionService.getQuestions().then((res) => {
      setQuestions(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedQuestionId !== null) {
      QuestionService.getQuestionById(selectedQuestionId).then((res) => {
        setQuestion(res.data);
      });
    }
  }, [selectedQuestionId]);

  const deleteQuestion = () => {
    if (titleError) {
      return;
    }

    QuestionService.deleteQuestion(selectedQuestionId!);
    navigate("/settings_tutor");
  };

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    const { title, value } = event.target;
    const inputValue = value.trim();
    const inputLength = inputValue.length;

    if (title === 'title' && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage('Title must be between 1 and 255 characters');
    } else {
      setError(false);
      setErrorMessage('');
    }

    setQuestion({
      ...question!,
      textQuestion: inputValue
    });
  };

  return (
    <div>
      <div>
        <h3>Delete Question</h3> 
        <div>
          <form>
            <div className="form-group">
              <label>Question</label>
              <select
                name="quiz"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedQuestionId(Number(e.target.value));
                }}
              >
                <option selected>Select the Question to delete</option>
                {questions.map((question) => {
                  return (
                    <option key={question.id} value={question.id}>
                      {question.textQuestion}
                    </option>
                  );
                })}
              </select>
            </div>
            {question && (
              <>
                <button type="button" className="btn btn-success" onClick={deleteQuestion} disabled={titleError}>
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
export default DeleteQuestionTutor;