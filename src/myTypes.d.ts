interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }
  
  interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }
  
  type QuestionState = Question & { answers: string[] };
  