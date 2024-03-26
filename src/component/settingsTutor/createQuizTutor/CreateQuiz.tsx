import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../../../services/QuizService";
import Quiz from "../../../models/QuizModel";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState<Quiz>();
    const [savedQuiz, setSavedQuiz] = useState<any>();
    const [savedSuccessfully, setSaveSuccessfully] = useState<boolean>();
    const [resourceAlreadyExists, setResourceAlreadyExists] = useState<boolean>();
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const saveQuiz = async () => {

        try {
            setLoading(true);
            const tempSavedQuiz = await QuizService.createQuiz(quiz!);
            setSavedQuiz(tempSavedQuiz)

            //const statusCode= savedQuiz.status;
            console.log("Questa è la risposta:", savedQuiz);
            //console.log("Questa è lo stato:", statusCode);
            console.log("Questo è il messaggio che già esiste: ", savedQuiz.data.data.message)
            console.log("Questa l'id:", savedQuiz.data.data.id);
            console.log("Questa lo stato:", savedQuiz.status);


            if (savedQuiz.data.data.id != null && savedQuiz.status) {
                console.log("Quiz salvato correttamente");
                setSaveSuccessfully(true);
            }
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
                console.log("Errore 409: Quiz già esistente.");
                console.log("Messaggio di errore:", error.response.data.message);
                setSaveSuccessfully(false);
                setResourceAlreadyExists(true);
            } else {
                console.error("Errore durante il salvataggio del quiz:", error);
                setSaveSuccessfully(false);
            }

        }finally {
            setLoading(false); //reimpostare il caricamento a false anche in caso di errore
        }





        /*QuizService.createQuiz(quiz!);*/

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
                            <label>Title</label>
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

                        {savedSuccessfully && (
                            <div>
                                <label>Quiz salvato correttamente!</label>
                            </div>
                        )}

                        {!savedSuccessfully && resourceAlreadyExists && (
                            <div>
                                <label>Quiz già esistente!</label>
                            </div>
                        )}


                        <button type="button" className='btn btn-success' onClick={saveQuiz} disabled={loading}>
                           {loading ? 'Salvataggio in corso...' : 'Create Quiz'}
                        </button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;
