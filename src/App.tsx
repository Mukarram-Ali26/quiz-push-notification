import React, { useState, useEffect } from 'react';
import './App.css';
import QuizCard from './components/QuizCard';
import { FetchQuestion, Difficulty, QuestionState } from './components/api';
import { GlobalStyle, Wrapper } from './App.styles'
import { initNotification } from './services/firebaseService';

const Total_Question = 10;


export type AnsType = {
  question: string;
  answer: string;
  correct: boolean;
  correctAns: string;
}

function App() {
  useEffect(() => {
    initNotification()
// triggering nitification function
  }, [])

  const [loading, setLoading] = useState(false);
  const [questions, setQue] = useState<QuestionState[]>([]);
  const [number, setNo] = useState(0);
  const [userAns, setUserAns] = useState<AnsType[]>([]);
  const [score, setScore] = useState(0);
  const [finish, setFisish] = useState(true);



  const startQuiz = async () => {
    setLoading(true);
    setFisish(false);
    const newQuestions = await FetchQuestion(
      Total_Question,
      Difficulty.EASY
    );
    setQue(newQuestions);
    setScore(0);
    setUserAns([]);
    setNo(0);
    setLoading(false);

  }
// React.MouseEvent<HTMLButtonElement>
  const checkAns = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (!finish) {
      // User's answer
      const answer = e.currentTarget.value;
      // Checking ans if correct
      const correct = questions[number].correct_answer === answer;
      // increase score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      console.log(answerObject);

      setUserAns((prev: any) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === Total_Question) {
      setFisish(true);
    } else {
      setNo(nextQ);
    }
  }

  console.log(questions)

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz App in React Typescript</h1>
      {finish || userAns.length === Total_Question ?
        (<button className='start' onClick={startQuiz}>
          Start Quiz
        </button>)
        : null}
      {!finish ? <p className='score'>Score: {score}</p> : null}
      {loading ? <p>Loading Questions</p> : null}
      {!loading && !finish && (<QuizCard
        questionNo={number + 1}
        totalQuestion={Total_Question}
        question={questions[number].question}
        answers={questions[number].answers}
        userAns={userAns ? userAns[number] : undefined}
        callBack={checkAns}
      />)}
      {!finish && !loading && userAns.length === number + 1 && number !== Total_Question - 1 ? (
        <button className='next' onClick={nextQuestion}>
          Next Question
        </button>) : null}

    </Wrapper>
    </>
  );
}

export default App;
// yarn add styled-components @types/styled-components
