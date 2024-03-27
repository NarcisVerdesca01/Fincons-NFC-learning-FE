import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Answer from "../../../models/AnswerModel";
import AnswerService from "../../../services/AnswerService";

const CreateAnswer = () => {
  const [answer, setAnswer] = useState<Answer>();
  const navigate = useNavigate();

  const saveAnswer = () => {
    AnswerService.createAnswer(answer!);
    navigate("/settings_tutor");
  };

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal"> Create Answer </h3>
        <div>
          <form>
            <div>
              <label className="labelModal">Text</label>
              <input
                type="string"
                placeholder="Text"
                name="text"
                className="form-control"
                value={answer?.text}
                onChange={(e) => {
                  setAnswer({
                    ...answer!,
                    text: e.target.value,
                  });
                }}
              ></input>
            </div>

            <div>
              <label className="labelModal">Is correct answer?</label>{" "}
              <input
                type="checkbox"
                name="isCorrect"
                checked={answer?.correct}
                onChange={(e) => {
                  setAnswer({
                    ...answer!,
                    correct: e.target.checked,
                  });
                }}
              ></input>
            </div>
            <div className="containerButtonModal">
              <button className="buttonCheck" onClick={saveAnswer}>
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

export default CreateAnswer;
