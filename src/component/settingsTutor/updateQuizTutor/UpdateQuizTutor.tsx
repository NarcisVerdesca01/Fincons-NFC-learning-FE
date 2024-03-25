import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Quiz from "../../../models/QuizModel";

const UpdateQuiz = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<Quiz>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    QuizService.getQuizzes().then((res) => {
      setQuizzes(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedQuizId !== null) {
      QuizService.getQuizById(selectedQuizId).then((res) => {
        setQuiz(res.data);
      });
    }
  }, [selectedQuizId]);

  const updateQuiz = () => {
    if (titleError) {
      return;
    }

    QuizService.updateQuiz(selectedQuizId!, quiz!);
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

    setQuiz({
      ...quiz!,
      title: inputValue
    });
  };

  return (
    <div>
      <div>
        <h3>Rename Quiz</h3>
        <div>
          <form>
            <div className="form-group">
              <label>Quiz</label>
              <select
                name="quiz"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedQuizId(Number(e.target.value));
                }}
              >
                <option selected>Select the Quiz to rename</option>
                {quizzes.map((quiz) => {
                  return (
                    <option key={quiz.id} value={quiz.id}>
                      {quiz.title}
                    </option>
                  );
                })}
              </select>
            </div>
            {quiz && (
              <>
                <div>
                  <label>Title</label>
                  <input
                    type="string"
                    placeholder={quiz.title}
                    name="title"
                    className={`form-control ${titleError ? 'border-red-500' : ''}`}
                    value={quiz.title}
                    onChange={(e) => handleInputChange(e, setTitleError, setTitleErrorMessage)}
                  ></input>
                  {titleErrorMessage && <p className="text-muted">{titleErrorMessage}</p>}
                </div>
                <button className="btn btn-success" onClick={updateQuiz} disabled={titleError}>
                  update
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
export default UpdateQuiz;