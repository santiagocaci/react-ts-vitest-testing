import { TodoFooter } from '@/components/TodoFooter';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('TodoFooter', () => {
  it('should render "task" when the number of incomplete task is one', () => {
    render(<TodoFooter numberOfIncompleteTasks={1} />, {
      wrapper: BrowserRouter,
    });
    const paragraphElement = screen.getByText('1 task');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render the correct amount of incomplete tasks', () => {
    render(<TodoFooter numberOfIncompleteTasks={3} />, {
      wrapper: BrowserRouter,
    });
    const paragraphElement = screen.getByText(/3 tasks/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
