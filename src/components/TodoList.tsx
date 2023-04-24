import { Todo } from '@/types';
import styled from 'styled-components';
import { TodoFooter } from './TodoFooter';

const TodoListContainer = styled.div`
  background-color: white;
  margin-top: 2rem;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TodoContainer = styled.div`
  overflow: auto;
  height: 90%;
`;
const TodoItem = styled('div')<{ todoItemActive: boolean }>`
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.082);
  padding: 1rem 0;
  cursor: pointer;
  text-decoration: ${props => (props.todoItemActive ? 'line-through' : '')};
  color: ${props => (props.todoItemActive ? 'gray' : '')};
`;

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const TodoList = ({ todos, setTodos }: Props) => {
  const updateTask = (id: string) => {
    const updatedTasks = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach(todo => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <TodoListContainer>
      <TodoContainer>
        {todos.map((todo, index) => (
          <TodoItem
            todoItemActive={todo.completed}
            key={index}
            onClick={() => updateTask(todo.id)}
          >
            {todo.task}
          </TodoItem>
        ))}
      </TodoContainer>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </TodoListContainer>
  );
};
