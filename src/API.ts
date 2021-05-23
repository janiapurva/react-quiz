
export enum Difficulty {
  EASY = "easy",
  MEDIAM = "mediam",
  HARD = "hard"
}
export const fetchQuizQuestions = async (amount:number,difficulty:Difficulty) => {
  const endPoint =  `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await(await fetch(endPoint)).json()
  console.log(data);
}