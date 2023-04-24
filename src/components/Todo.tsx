import { Todo as ITodo } from '@/types';
import { useState } from 'react';
import { Header } from './Header';
import { AddInput } from './AddInput';
import styled from 'styled-components';

const TodoContainer = styled.div`
  margin-top: -22.5vh;
`;

export const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <TodoContainer>
      <Header title='Todo' />
      <AddInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoContainer>
  );
};
