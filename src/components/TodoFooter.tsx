import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  numberOfIncompleteTasks: number;
};

const TodoFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    color: grey;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: blue;
  text-decoration: underline;
`;

export const TodoFooter = ({ numberOfIncompleteTasks }: Props) => {
  return (
    <TodoFooterContainer>
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'}
      </p>
      <StyledLink to='/followers'>Followers</StyledLink>
    </TodoFooterContainer>
  );
};
