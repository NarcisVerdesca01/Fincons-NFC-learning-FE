import Quiz from "./QuizModel";
import User from "./UserModel";


interface QuizResultsModel {
    id: number,
    user: User,
    quiz: Quiz,
    totalScore: number
}

export default QuizResultsModel;