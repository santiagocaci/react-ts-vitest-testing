import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { Users } from '@/components/Users';
import { server } from '../mocks/server';

describe('<Users/>', () => {
  it('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText(/users/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users.length).toBe(3);
  });

  it('renders error', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) =>
        res(ctx.status(500))
      )
    );
    render(<Users />);
    const errorText = await screen.findByText('Error fetching users');
    expect(errorText).toBeInTheDocument();
  });
});
