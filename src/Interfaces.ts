export interface Item {
  id: number;
  todoText: string;
  completed: boolean;
}

export interface Error {
  title: string;
  errorMessage: string;
}

export interface Status {
  allTodos: number;
  allActive: number;
  allCompleted: number;
}
