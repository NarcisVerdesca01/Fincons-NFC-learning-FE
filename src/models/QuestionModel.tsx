import Quiz from "./QuizModel";
import WrongAnswer from "./WrongAnswerModel";

interface Question {
    id: number,
    textQuestion: string,
    correctAnswer: string,
    wrongAnswer: WrongAnswer[],
    quiz: Quiz,
    score: number
}

export default Question;