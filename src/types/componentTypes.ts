export type addTodoProps = {
  addTodo: (title1: string, assign: string) => void
}
export interface Todo {
  createdAt: string;
  title: string;
  assginedTo: string;
  isComplete: boolean;
  id: string;
}

export interface countProps {
  todo: Todo[]
}
export type searchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export interface todoProps {
  title: string,
  assginedTo: string,
  onCheck: (itemId: string, isComplete: boolean) => void,
  id: string,
  isComplete: boolean,
  onDelete: (id: string) => void
}
export type todoListProps = {
  todo: Todo[],
  onCheck: (itemId: string, isComplete: boolean) => void,
  onDelete: (id: string) => void
}
