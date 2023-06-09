export interface Item {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
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
