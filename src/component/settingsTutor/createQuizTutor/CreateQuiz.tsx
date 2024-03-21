import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Quiz from "../../../models/QuizModel";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState<Quiz>();
    const navigate = useNavigate();

    const saveQuiz = () => {
        QuizService.createQuiz(quiz!);
        navigate("/settings_tutor")
    }

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Create Quiz </h3>
                <div>
                    <form>
                        <div>
                            <label>Name</label>
                            <input
                                type="string"
                                placeholder="name"
                                name="name"
                                className="form-control"
                                value={quiz?.title}
                                onChange={(e) => {
                                    setQuiz({
                                        ...quiz!,
                                        title: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <button className='btn btn-success' onClick={saveQuiz}>Create Quiz</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;
