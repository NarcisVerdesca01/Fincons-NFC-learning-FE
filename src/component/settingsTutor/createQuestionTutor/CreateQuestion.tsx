import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Question from "../../../models/QuestionModel";
import QuestionService from "../../../services/QuestionService";

const CreateQuestion = () => {
    const [question, setQuestion] = useState<Question>();
    const navigate = useNavigate();

    const saveQuestion = () => {
        QuestionService.createQuestion(question!);
        navigate("/settings_tutor")
    }

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Create Question </h3>
                <div>
                    <form>
                        <div>
                            <label>Text</label>
                            <input
                                type="string"
                                placeholder="text"
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
                            <label>Value of Question</label>
                            <input
                                type="string"
                                placeholder="2"
                                name="text"
                                className="form-control"
                                value={question?.valueOfQuestion}
                                onChange={(e) => {
                                    setQuestion({
                                        ...question!,
                                        valueOfQuestion: parseInt(e.target.value),
                                    });
                                }}
                            ></input>
                        </div>

                        <button className='btn btn-success' onClick={saveQuestion}>Create Question</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateQuestion;
