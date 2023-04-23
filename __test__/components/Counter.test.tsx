import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '@/components/Counter';

describe('Counter', () => {
  it('renders correctly', () => {
    render(<Counter count={10} />);
    const textElement = screen.getByText(/Counter/i);
    const incrementButton = screen.queryByRole('button', {
      name: /increment/i,
    });
    const decrementButton = screen.queryByRole('button', {
      name: /decrement/i,
    });

    expect(textElement).toBeInTheDocument();
    expect(incrementButton).not.toBeInTheDocument();
    expect(decrementButton).not.toBeInTheDocument();
  });

  it('handlers are called', async () => {
    const user = userEvent.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();

    render(
      <Counter
        count={10}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toBeCalled();
    expect(decrementHandler).toBeCalled();
  });
});
