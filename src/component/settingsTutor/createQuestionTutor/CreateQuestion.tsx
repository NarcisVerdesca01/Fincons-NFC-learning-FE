import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../../models/QuestionModel";
import QuestionService from "../../../services/QuestionService";

const CreateQuestion = () => {
  const [question, setQuestion] = useState<Question>({
    id: 0,
    textQuestion: "",
    answers: [],
    quiz: {
      id: 0,
      title: "",
      questions: [],
      lesson: { title: "", backgroundImage: "" },
    },
    valueOfQuestion: 2,
  });
  const navigate = useNavigate();

  const saveQuestion = () => {
    QuestionService.createQuestion(question!);
    navigate("/settings_tutor");
  };

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal"> Create Question </h3>
        <div>
          <form>
            <div>
              <label htmlFor="text" className="labelModal">
                Text
              </label>
              <input
                type="string"
                placeholder="Text"
                name="text"
                className="form-control"
                value={question?.textQuestion}
                onChange={(e) => {
                  setQuestion({
                    ...question!,
                    textQuestion: e.target.value,
                  });
                }}
              ></input>
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
                value={question?.valueOfQuestion}
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
                type="button"
                className="buttonCheck"
                onClick={saveQuestion}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
