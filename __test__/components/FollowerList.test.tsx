import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FollowersList } from '@/components/FollowersList';

describe('FollowerList', () => {
  it('should renders three followers', async () => {
    render(<FollowersList />, { wrapper: BrowserRouter });
    const followers = await screen.findAllByRole('listitem');
    expect(followers).toHaveLength(5);
  });
});
