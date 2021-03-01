const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}



export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  try {

    const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(URL)).json();
    localStorage.setItem("data", JSON.stringify(data));

    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {


    const dataOff: any = localStorage.getItem("data")
    const dataOff1 = JSON.parse(dataOff)
    return dataOff1.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  }
};
