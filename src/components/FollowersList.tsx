import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TUser } from '@/types';

const FollowerListContainer = styled.div`
  background-color: white;
  margin-top: 2rem;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
  height: 50vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FollowerItem = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.082);
  padding: 1rem 0;
`;
const FollowerDetails = styled.div`
  margin-left: 1.25rem;
`;
const FollowerItemName = styled.div`
  display: flex;
  h4 {
    margin-right: 0.5 rem;
    color: black;
  }
  img {
    border-radius: 50%;
    width: 4rem;
  }
`;

export const FollowersList = () => {
  const [followers, setFollowers] = useState<TUser[] | undefined>([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setFollowers(data.results));
  }, []);

  return (
    <FollowerListContainer>
      <div>
        {followers &&
          followers.map((follower, index) => (
            <FollowerItem data-testid={`follower-item${index}`}>
              <img src={follower.picture.large} alt='' />
              <FollowerDetails>
                <FollowerItemName>
                  <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                </FollowerItemName>
                <p>{follower.login.username}</p>
              </FollowerDetails>
            </FollowerItem>
          ))}
      </div>
      <div>
        <Link to='/'>Go Back</Link>
      </div>
    </FollowerListContainer>
  );
};
