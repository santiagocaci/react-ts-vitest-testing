import { render, screen } from '@testing-library/react';
import App from '@/App';

describe.skip('App', () => {
  it('renders correctly', () => {
    render(<App />);
    const greetElement = screen.getByRole('heading', {
      level: 1,
      name: /hi!/i,
    });
    expect(greetElement).toBeInTheDocument;
  });
});
