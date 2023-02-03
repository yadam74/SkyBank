import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../shared/hooks';
import { selectUser } from '../shared/UserSlicer';
import Button from './Button';
import Form from './Form';
const StyledDiv = styled.div`
  max-height: 800px;
  background-color: var(--color3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: 0;
  transition: all 0.4s;
  h1 {
    font-size: 5rem;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 2rem;
    color: var(--textColor2);
  }
  .bonusOffer {
    color: var(--textColor3);
  }
  p {
    padding: 20px;
    margin: 0;
  }
  .login {
    color: var(--textColor1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
      padding: 5px;
      color: var(--textColor1);
      a {
        color: var(--textColor2);
        text-decoration: none;
        font-weight: bold;
        &:hover {
          text-shadow: 1px 1px 4px#d6d6d6;
          color: var(--textColor1);
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    max-height: 600px;
    .login {
      height: 100%;
      width: 100%;
    }
  }
`;
const Hero = () => {
  // let localUser = localStorage.getItem('user');

  let user = null;
  // if (localUser) {
  //   user = JSON.parse(localUser);
  // }

  let User = useAppSelector(selectUser);
  if (User.id !== 0) {
    user = User;
  }

  return (
    <StyledDiv>
      <div className='bonusOffer'>
        <h1>$200</h1>
        <h2>New SkyBank Checking Users</h2>
        <p>When you open a new SkyBank Checking account with direct deposit.</p>
      </div>
      <div className='login'>
        <Form>
          <h3>Welcome {user != null ? user.username : ''}</h3>
          {user != null ? (
            ''
          ) : (
            <Button>
              <Link to='/signin'>Sign in</Link>
            </Button>
          )}

          {user != null ? (
            ''
          ) : (
            <p>
              Not enrolled? <Link to='/signup'>Sign up now.</Link>
            </p>
          )}
          <p>
            {user != null ? '' : 'New to SkyBank?'}{' '}
            <Link to='/openaccount'>Open Account</Link>
          </p>
        </Form>
      </div>
    </StyledDiv>
  );
};

export default Hero;
