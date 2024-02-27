import Lesson from "./LessonModel";
import Question from "./QuestionModel";

interface Quiz {
    id: number,
    title: string,
    questions: Question[],
    lesson: Lesson
}

export default Quiz;