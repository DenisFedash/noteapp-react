import { DataProps } from "../interfaces/prop.interface";



let initialNotes: DataProps[] = [
  {
    id: 1,
    time: '2023-07-30T10:00:00',
    content: "Buy groceries",
    category: "Task",
    datesMentioned: ["2023-07-31"],
    archived: false,
  },
  {
    id: 2,
    time: "2023-07-29T15:30:00",
    content: "What's the meaning of life?",
    category: "Random Thought",
    datesMentioned: [],
    archived: false,
  },
  {
    id: 3,
    time: "2023-07-30T10:00:00",
    content: "Learn JS",
    category: "Task",
    datesMentioned: ["2023-07-31"],
    archived: false,
  },
  {
    id: 4,
    time: "2023-07-29T15:30:00",
    content: "Work in Radency",
    category: "Idea",
    datesMentioned: [],
    archived: false,
  },
  {
    id: 5,
    time: "2023-07-30T10:00:00",
    content: "Learn React",
    category: "Task",
    datesMentioned: ["2023-07-31"],
    archived: false,
  },
  {
    id: 6,
    time: "2023-07-29T15:30:00",
    content: "How start internship in Radency",
    category: "Random Thought",
    datesMentioned: [],
    archived: false,
  },
  {
    id: 7,
    time: "2023-07-29T15:30:00",
    content: "Start new life",
    category: "Idea",
    datesMentioned: [],
    archived: false,
  },
];

export { initialNotes };
