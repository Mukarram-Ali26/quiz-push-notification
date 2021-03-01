import React from 'react';
import {AnsType} from '../App';
import { Wrapper, ButtonWrapper } from './QuizCard.styles';

type Props = {
    question: string;
    answers: string[];
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAns: AnsType | undefined;
    questionNo: number;
    totalQuestion: number;
};
const QuizCard: React.FC<Props> = ({
    question,
    answers,
    userAns,
    callBack,
    questionNo,
    totalQuestion,
}) => {
    return (
        <Wrapper>
            <p className='number'>
                Question Number = {questionNo}/{totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div > 
                {answers.map((ans) => (
                    <ButtonWrapper key={ans}
                    correct={userAns?.correctAns === ans}
                        userClicked={userAns?.answer === ans}>
                      
                        <button disabled={userAns ? true : false} value={ans} onClick={callBack}>
                            <span dangerouslySetInnerHTML={{ __html: ans }} />
                        </button>
                        
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuizCard;
