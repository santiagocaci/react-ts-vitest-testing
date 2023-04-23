import { Skills } from '@/components/Skills';
import { render, screen } from '@testing-library/react';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  it('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  it('render login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('start learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: /start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it('start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole('button', {
      name: /start learning/i,
    });
    expect(startLearningButton).toBeInTheDocument();
  });
});
