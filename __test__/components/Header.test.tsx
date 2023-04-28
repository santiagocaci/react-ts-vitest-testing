import { Header } from '@/components/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header title='Todos' />);
    const titleHeader = screen.getByRole('heading', {
      level: 1,
      name: /todos/i,
    });
    expect(titleHeader).toBeInTheDocument();
  });
});
