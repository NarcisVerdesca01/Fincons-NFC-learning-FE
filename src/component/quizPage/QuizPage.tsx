import React, { useEffect, useState } from "react";
import QuestionModel from "../../models/QuestionModel";
import QuizModel from "../../models/QuizModel";
import { useParams } from "react-router-dom";
import QuizService from "../../services/QuizService";
import AnswerModel from "../../models/AnswerModel";

interface Props {
    quizId: number | undefined;
    setQuizId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const QuizPage = (props: Props) => {
    const { idQuiz } = useParams();
    const quizId = parseInt(idQuiz!);
    const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
    const [quiz, setQuiz] = useState<QuizModel>();
    const [questionList, setQuestionList] = useState<QuestionModel[]>([]);
 

    useEffect(() => {
        QuizService.getQuizById(quizId!).then((res) => {
            setQuiz(res.data.data);
            
            console.log(res.data.data.lessons,"sono qui in QuizPage res.data.data.quiz");
           setQuestionList(res.data.data.questions);
          });
      }, [quizId]);

     // Funzione per gestire la selezione delle risposte
     const handleAnswerSelection = (questionId: number, answerId: number) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answerId
        }));
    };
    
    
    
    const sendAnswers = () => {
        if (!quizId || !quiz) {
            console.error('Quiz ID or quiz data not available');
            return;
        }
    
        // Costruisci il corpo della richiesta con i dati delle risposte
        const answersMap: { [key: number]: number[] } = {};
        Object.keys(userAnswers).forEach((questionId) => {
            const questionIdNum = parseInt(questionId, 10);
            answersMap[questionIdNum] = [userAnswers[questionIdNum]];
           
        });

        console.log(answersMap);
    
        // Effettua la chiamata POST al server
        QuizService.sendQuizResult(quizId, answersMap)
            .then((response) => {
                console.log('Risposte inviate con successo:', response.data);
                // Aggiorna lo stato o esegui altre azioni se necessario
            })
            .catch((error) => {
                console.error('Errore durante l\'invio delle risposte:', error);
                // Gestisci eventuali errori
            });
    };
   


    return (
        <>
            <h1>Ciaooo id quiz: {quiz?.id}</h1>

             <h1>{quiz?.title}</h1>
                   
           
              {questionList && questionList.map((question: any)=> (
                 <div key={question.id}>
                    <h1>Domanda: {question.textQuestion}</h1>
                      {question.answers.map((answer: AnswerModel)=>(
                        <div key={answer.id}>
                          <input 
                          type="radio" 
                          id={`answer-${answer.id}`} 
                          name={`question-${question.id}`} 
                          value={answer.id}
                          checked= {userAnswers[question.id] === answer.id}
                          onChange={()=> handleAnswerSelection(question.id, answer.id)} />
                          <label htmlFor={`answer-${answer.id}`}>{answer.text}</label>
                        </div>
                     
                      ))}
                 </div>
                
            ))}          
            
            <button onClick={sendAnswers}>Invia</button>
           
       
         
        </>
    );



};



export default QuizPage;
