import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Answer from "../../../models/AnswerModel";
import QuestionService from "../../../services/QuestionService";
import AnswerService from "../../../services/AnswerService";

const CreateAnswer = () => {
    const [answer, setAnswer] = useState<Answer>();
    const navigate = useNavigate();

    const saveAnswer = () => {
        AnswerService.createAnswer(answer!);
        navigate("/settings_tutor")
    }

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Create Answer </h3>
                <div>
                    <form>
                        <div>
                            <label>Text</label>
                            <input
                                type="string"
                                placeholder="text"
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
                            <label>Is correct answer</label>
                            <input
                                type="checkbox"
                                name="isCorrect"
                                checked={answer?.correct}
                               onChange={(e)=>{
                                 setAnswer({
                                    ...answer!, 
                                    correct: e.target.checked,
                                 });
                               }}
                               
                            ></input>
                        </div>

                        <button className='btn btn-success' onClick={saveAnswer}>Create Answer</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAnswer;
