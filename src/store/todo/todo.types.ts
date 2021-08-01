export interface TodoInitState {
  todos: Todo[];
  todo: Todo;
  totalTodos: number;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
