import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Answer from "../../../models/AnswerModel";
import AnswerService from "../../../services/AnswerService";

const UpdateAnswerTutor = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswersId, setSelectedAnswersId] = useState<number | null>(
    null
  );
  const [answer, setAnswer] = useState<Answer>();
  const [textError, setTextError] = useState(false);
  const [textErrorMessage, setTextErrorMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    AnswerService.getAnswers().then((res) => {
      setAnswers(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedAnswersId !== null) {
      AnswerService.getAnswerById(selectedAnswersId).then((res) => {
        setAnswer(res.data);
      });
    }
  }, [selectedAnswersId]);

  const updateAnswer = () => {
    if (textError) {
      return;
    }

    AnswerService.updateAnswer(selectedAnswersId!, answer!);
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

    if (name === "text" && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage("Title must be between 1 and 255 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }

    setAnswer({
      ...answer!,
      text: inputValue,
    });
  };

  return (
    <div>
      <h3 className="titleModal">Update Answer</h3>
      <form>
        <div className="form-group">
          <label className="labelModal">Answer</label>
          <select
            name="answer"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setSelectedAnswersId(Number(e.target.value));
            }}
          >
            <option selected>Select the Answer to update</option>
            {answers.map((answer) => {
              return (
                <option key={answer.id} value={answer.id}>
                  {answer.text}
                </option>
              );
            })}
          </select>
        </div>
        {answer && (
          <>
            <div>
              <label className="labelModal">Text of answer</label>
              <input
                type="text"
                placeholder={answer.text}
                name="text"
                className={`form-control ${textError ? "border-red-500" : ""}`}
                value={answer.text}
                onChange={(e) =>
                  handleInputChange(e, setTextError, setTextErrorMessage)
                }
              ></input>
              {textErrorMessage && (
                <p className="text-muted">{textErrorMessage}</p>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                name="isCorrect"
                checked={answer && answer.correct}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setAnswer((prevAnswer) => ({
                    ...prevAnswer!,
                    correct: isChecked,
                  }));
                }}
              />{" "}
              <label htmlFor="isCorrect">Is Correct</label>
            </div>
            <div className="containerButtonModal">
              <button
                className="buttonCheck"
                onClick={updateAnswer}
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
export default UpdateAnswerTutor;
