import { Todo } from '@/types';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  margin-top: 2rem;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem rgb(0, 0, 0, 0.329);
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  width: 90%;
  padding: 0.5rem;
`;
const AddButton = styled.button`
  border: none;
  padding: 0.3rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(53, 201, 157);
  color: white;
  font-weight: 900;
`;

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const AddInput = ({ setTodos, todos }: Props) => {
  const [todo, setTodo] = useState('');
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const updateTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false },
    ];
    setTodos(updateTodos);
    setTodo('');
  };

  return (
    <Container>
      <form onSubmit={addTodo}>
        <Input
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder='clean the dirty dishes...'
        />
        <AddButton type='submit'>Add</AddButton>
      </form>
    </Container>
  );
};
