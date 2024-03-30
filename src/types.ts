export interface Itask {
  id: number;
  text: string;
  completed: boolean;
}

export interface IProps {
  tasks: Itask[];
  selectedTask?: Partial<Itask>;
  setSelectedTask?: React.Dispatch<React.SetStateAction<Partial<Itask>>>;
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>;
  toggleTodo?: (todoId: number) => void;
  forwardedRef?: React.RefObject<HTMLInputElement>;
}
