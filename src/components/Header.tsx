import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-size: 5rem;
  text-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.342);
`;

export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <Title title='Header'>{title}</Title>
    </>
  );
};
