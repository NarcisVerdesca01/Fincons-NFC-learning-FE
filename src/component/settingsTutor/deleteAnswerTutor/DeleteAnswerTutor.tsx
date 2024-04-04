import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Answer from "../../../models/AnswerModel";
import AnswerService from "../../../services/AnswerService";

const DeleteAnswerTutor = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [answer, setAnswer] = useState<Answer>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AnswerService.getAnswers().then((res) => {
      setAnswers(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedAnswerId !== null) {
      AnswerService.getAnswerById(selectedAnswerId).then((res) => {
        setAnswer(res.data);
      });
    }
  }, [selectedAnswerId]);

  const deleteAnswer = () => {
    if (titleError) {
      return;
    }

    AnswerService.deleteAnswer(selectedAnswerId!);
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

    setAnswer({
      ...answer!,
      text: inputValue
    });
  };

  return (
    <div>
      <div>
        <h3>Delete Answer</h3> 
        <div>
          <form>
            <div className="form-group">
              <label>Answer</label>
              <select
                name="quiz"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedAnswerId(Number(e.target.value));
                }}
              >
                <option selected hidden disabled>Select the Answer to delete</option>
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
                <button type="button" className="btn btn-success" onClick={deleteAnswer} disabled={titleError}>
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
export default DeleteAnswerTutor;