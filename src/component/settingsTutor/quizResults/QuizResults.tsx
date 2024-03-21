import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizResultsModel from "../../../models/QuizResultsModel";
import QuizResultsService from "../../../services/QuizResultsService";

const QuizResults = () => {
    const [quizResults, setQuizResults] = useState<QuizResultsModel[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        QuizResultsService.getQuizResults().then((res) => {
            console.log(res.data)

            setQuizResults(res.data);
        });
    }, []);

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> View Quiz Results </h3>
                <div>
                    <form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Quiz Title</th>
                                    <th scope="col">Total Score</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizResults.map((quizResult) => {
                                    return (
                                        <tr key = {quizResult.id}>
                                        <th scope="row"> {quizResult.id}</th>
                                        <td>{quizResult.user.firstName}</td>
                                        <td>{quizResult.user.lastName}</td>
                                        <td>{quizResult.user.email}</td>
                                        <td>{quizResult.quiz.title}</td>
                                        <td>{quizResult.totalScore}%</td>
                                        <td>{quizResult.whenDone ?JSON.stringify( quizResult.whenDone) : "N/A"}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <button className='btn btn-danger' onClick={backToSettings}>Indietro</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuizResults;
