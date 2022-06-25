export interface Question {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers: string[],
  options?: string[],
  question: string, 
  tags: string[],
  type: string;
  difficulty:string
}