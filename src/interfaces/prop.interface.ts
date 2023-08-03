export interface NoteProps {
  id: number;
  time: string;
  content: string;
  category: string;
  datesMentioned: string[];
  archived: boolean;
}