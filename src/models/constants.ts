import { Question } from "./question.model";

export const dailyQuestions: Question[] = [
  {
    category: "Music",
    id: "622a1c397cc59eab6f950d81",
    options: [ "Swans",
    "The Pussycat Dolls", "Kiss",
    "Three 6 Mafia"],
    correctAnswer: "Kiss",
    incorrectAnswers: [
      "Swans",
      "The Pussycat Dolls",
      "Three 6 Mafia"
    ],
   question: "Which band includes 'Paul Stanley'?",
   tags: [
      "music"
    ],
   type: "Multiple Choice",
   difficulty: "hard"
  },
  {
    category: "History",
    id: "622a1c3d7cc59eab6f951bf3",
   correctAnswer: "Winston Churchill",
    incorrectAnswers: [
      "Abraham Lincoln",
      "Neil Armstrong",
      "Tom Cruise"
    ],
   question: "Who said 'I have nothing to offer but blood, tears, toil and sweat'?",
   tags: [
      "quotes",
      "people",
      "history"
    ],
   type: "Multiple Choice",
   difficulty: "hard"
  },
  {
    category: "Sport & Leisure",
    id: "622a1c367cc59eab6f950049",
   correctAnswer: "A Table Tennis Player",
    incorrectAnswers: [
      "A Golfer",
      "A Cricketer",
      "A Baseball Player"
    ],
   question: "Who Might Use A Penholder Grip",
   tags: [
      "general_knowledge",
      "sport"
    ],
   type: "Multiple Choice",
   difficulty: "medium"
  }
]