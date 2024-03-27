import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../../models/QuestionModel";
import QuestionService from "../../../services/QuestionService";

const UpdateQuestionTutor = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null
  );
  const [question, setQuestion] = useState<Question>();
  const [textError, setTextError] = useState(false);
  const [textErrorMessage, setTextErrorMessage] = useState("");
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

  const updateQuestion = () => {
    if (textError) {
      return;
    }

    QuestionService.updateQuestion(selectedQuestionId!, question!);
    navigate("/settings_tutor");
  };

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { name, value } = event.target;
    const inputValue = value.trim();
    const inputLength = inputValue.length;

    if (name === "textQuestion" && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage("Title must be between 1 and 255 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }

    setQuestion({
      ...question!,
      textQuestion: inputValue,
    });
  };

  return (
    <div>
      <h3 className="titleModal">Update Question</h3>
      <form>
        <div className="form-group">
          <label className="labelModal">Question</label>
          <select
            name="question"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setSelectedQuestionId(Number(e.target.value));
            }}
          >
            <option selected>Select the Question to update</option>
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
            <div>
              <label className="labelModal">Text of question</label>
              <input
                type="text"
                placeholder={question.textQuestion}
                name="text"
                className={`form-control ${textError ? "border-red-500" : ""}`}
                value={question.textQuestion}
                onChange={(e) =>
                  handleInputChange(e, setTextError, setTextErrorMessage)
                }
              ></input>
              {textErrorMessage && (
                <p className="text-muted">{textErrorMessage}</p>
              )}
            </div>

            <div>
              <label htmlFor="number" className="labelModal">
                Value of Question
              </label>
              <input
                type="number"
                name="value"
                min="1"
                max="100"
                className="form-control"
                value={question.valueOfQuestion}
                onChange={(e) => {
                  setQuestion((prevQuestion) => ({
                    ...prevQuestion!,
                    valueOfQuestion: parseInt(e.target.value),
                  }));
                }}
              ></input>
            </div>
            <div className="containerButtonModal">
              <button
                className="buttonCheck"
                onClick={updateQuestion}
                disabled={textError}
              >
                <span className="frontCheck">
                  <i className="bi bi-check2"></i>
                </span>
              </button>
              <button className="buttonReturn" onClick={backToSettings}>
                <span className="frontReturn">
                  <i className="bi bi-arrow-left"></i>
                </span>
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
export default UpdateQuestionTutor;
