import React from "react";
import { Wrapper, ButtonWrapper } from "./QuizComp.styles";

interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizComp: React.FC<Props> = ({
  question,
  answers,
  callback,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={selectedAnswer?.correctAnswer === answer}
            userClicked={selectedAnswer?.answer === answer}
          >
            <button
              disabled={!!selectedAnswer}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
