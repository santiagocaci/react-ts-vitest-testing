import styled from 'styled-components';
import { FollowersList } from './FollowersList';
import { Header } from './Header';

const Container = styled.div`
  margin-top: -22.5vh;
`;

export const Followers = () => {
  return (
    <Container>
      <Header title='Followers' />
      <FollowersList />
    </Container>
  );
};
