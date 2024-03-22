interface TodoListProps {
  todos: { id: string; text: string }[];
}

export const TodoList: React.FC<TodoListProps> = (props) => {

  return (
    <ul>
      {props.todos.map((i) => (
        <li key={i.id}>{i.text}</li>
      ))}
    </ul>
  );
};
