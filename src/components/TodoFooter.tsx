import styled from 'styled-components';

type Props = {
  numberOfIncompleteTasks: number;
};

const TodoFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
    color: grey;
  }
  a {
    font-weight: 600;
    color: grey;
    text-decoration: none;
  }
`;

export const TodoFooter = ({ numberOfIncompleteTasks }: Props) => {
  return (
    <TodoFooterContainer>
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'}
      </p>
      {/* //TODO: HACER LO DEL LINK  */}
      {/* <Link to='/followers'>Followers</Link> */}
    </TodoFooterContainer>
  );
};
