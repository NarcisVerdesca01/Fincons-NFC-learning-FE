import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Quiz from "../../../models/QuizModel";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState<Quiz>();
    const [savedQuiz, setSavedQuiz] = useState<any>();
    const [savedSuccessfully, setSaveSuccessfully] = useState<boolean>();
    const [resourceAlreadyExists, setResourceAlreadyExists] = useState<boolean>();
    const [loading, setLoading] = useState(false);
    const [isCallComplete, setIsCallComplete] = useState(false);

    const navigate = useNavigate();

    const saveQuiz = async () => {
        try {
            setLoading(true);
            const tempSavedQuiz = await QuizService.createQuiz(quiz!);
            setSavedQuiz(tempSavedQuiz);
            setIsCallComplete(true);
        } catch (error: any) {
            console.error("Errore durante il salvataggio del quiz:", error);
            setSavedQuiz(error.response);
            setIsCallComplete(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (savedQuiz && isCallComplete) {
            if (savedQuiz.status === 200) {
                setSaveSuccessfully(true);
                setResourceAlreadyExists(false);
            } else if (savedQuiz.status === 409) {
                setSaveSuccessfully(false);
                setResourceAlreadyExists(true);
            }
        }
    }, [savedQuiz, isCallComplete]);

    const backToSettings = () => {
        navigate("/settings_tutor");
    }

    return (
        <div>
            <h3> Create Quiz </h3>
            <form className="was-validated">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        required
                        id="validationTextarea"
                        aria-describedby="validationServer03Feedback"
                        type="text"
                        placeholder="Name of quiz"
                        name="title"
                        className="form-control is-valid"
                        value={quiz?.title || ''}
                        onChange={(e) => {
                            setQuiz({
                                ...quiz!,
                                title: e.target.value,
                            });
                        }}
                    />



                </div>

                {loading && <div>Saving in progress...</div>}

                {!loading && savedSuccessfully && (
                    <div>
                        <label>Quiz saved correctly!</label>
                    </div>
                )}

                {!loading && !savedSuccessfully && resourceAlreadyExists && (
                    <div>
                        <label>The quiz already exists!</label>
                    </div>
                )}

                <div style={{ marginTop: "3%", display: "flex", justifyContent: "space-between" }}>
                   
                        <button disabled={loading || !quiz?.title} type="button" className='btn btn-success' onClick={saveQuiz} >
                            {loading ? 'Saving in progress...' : 'Create Quiz'}
                        </button>
                    


                    <button type="button" className='btn btn-danger' onClick={backToSettings}>Back</button>
                </div>


            </form>
            <button onClick={backToSettings}>Back</button>
        </div>
    );
};

export default CreateQuiz;