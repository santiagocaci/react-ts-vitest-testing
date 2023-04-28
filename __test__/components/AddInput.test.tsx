import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddInput } from '@/components/AddInput';
import { Todo } from '@/types';

const todos: Todo[] = [];
// const setTodo = () => {};
const mockedSetTodo = vi.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={todos} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument;
  });

  it('should be able to type in input', async () => {
    render(<AddInput todos={todos} setTodos={mockedSetTodo} />);
    const user = userEvent.setup();
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /add/i });

    await user.type(inputElement, 'textbox');
    expect(inputElement).toHaveValue('textbox');
    await user.click(buttonElement);
    expect(inputElement).toHaveValue('');
  });
});
