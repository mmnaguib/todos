export interface ITodo {
  id: string;
  title: string;
  body: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
