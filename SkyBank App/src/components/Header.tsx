import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { selectUser, setDefault } from '../shared/UserSlicer';
import Button from './Button';
import DayNight from './daynight.svg';
import { selecDayNightSlice, setMode } from '../shared/ThemeSlicer';
import { ReactComponent as ProfileIcon } from './profile.svg';

export const StyledHeader = styled.header`
  background-color: var(--color1);
  position: sticky;
  top: 0;
  transition: all 0.4s;
  nav {
    color: var(--textColor3);
    div.upperNav {
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      a:hover {
        color: var(--textColor1);
      }
      .profile-icon {
        display: block;
        padding: 0 15px;
        width: 65px;
        height: 40px;
      }
      #dayNightSwitcherBtn {
        border: none;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: transparent;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: var(--icon-position);
          transition: all 0.5s;
        }
        @media screen and (max-width: 800px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      .group1,
      .user-menu {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        a {
          padding: 10px;
          text-decoration: none;
          color: var(--textColor2);
          transition: color 0.4s;
        }
      }
      .hamburger {
        background: none;
        border: none;
        display: none;
        overflow: hidden;
        span {
          display: block;
          height: 3px;
          width: 40px;
          background-color: var(--textColor1);
          margin: 10px 0;
          position: relative;
          top: 0;
          left: 0;
          transition: left 0.3s 0s, top 0.3s 0.15s, transform 0.3s 0s;
        }
        @media screen and (max-width: 800px) {
          display: block;
          &:hover {
            span {
              background-color: var(--textColor2);
              box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            }
          }
        }
        &.menu-open {
          span {
            transition: left 0.3s 0s, top 0.3s 0s, transform 0.3s 0.15s;
          }
          span:nth-child(1) {
            top: 13px;
            left: 0;
            transform: rotateZ(45deg);
          }
          span:nth-child(2) {
            top: 0px;
            left: 120%;
            transform: rotateZ(45deg);
          }
          span:nth-child(3) {
            top: -13px;
            left: 0;
            transform: rotateZ(-45deg);
          }
        }
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          a {
            padding: 10px;
            text-decoration: none;
            color: var(--textColor2);
            transition: color 0.4s;
            @media screen and (max-width: 800px) {
              font-size: 2rem;
            }
          }
          button {
            font-size: 1rem;
            width: auto;
            background: transparent;
            color: var(--textColor2);
            transition: color 0.4s;
            padding: 10px;
            @media screen and (max-width: 800px) {
              font-size: 1.6rem;
            }
          }
        }
      }
      @media screen and (max-width: 800px) {
        font-size: 1.6rem;
      }
    }
    ul.lowerNav {
      align-items: center;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
      background-color: var(--color2);
      transition: all 0.4s;
      li {
        a {
          color: var(--textColor1);
          text-decoration: none;
        }
      }
      @media screen and (max-width: 800px) {
        max-height: 0;
        overflow: hidden;
        padding: 0;
        flex-direction: column;

        li {
          width: 100%;
          text-align: center;
          a {
            display: block;
            padding: 20px;
            font-size: 1.6rem;
            &:hover {
              background-color: var(--textColor3);
              color: var(--color3);
              box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            }
          }
        }
        &.menu-open {
          max-height: 600px;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selecDayNightSlice);
  const [themeState, setThemeState] = React.useState(theme);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [iconColor, setIconColor] = React.useState('#006EA5');

  const dispatch = useAppDispatch();
  let navigateHome = useNavigate();

  const toggleDayNight = () => {
    dispatch(setMode(!themeState));
    setThemeState(!themeState);
    console.log(theme);

    if (!themeState) {
      document.documentElement.style.setProperty('--color1', '#f0f9ff');
      document.documentElement.style.setProperty('--color2', '#a4c8eb');
      document.documentElement.style.setProperty('--color3', '#5793cf');
      document.documentElement.style.setProperty('--textColor1', '#000');
      document.documentElement.style.setProperty('--textColor2', '#006EA5');
      document.documentElement.style.setProperty('--textcolor3', '#edf6ff');
      document.documentElement.style.setProperty('--icon-position', 'right');
      setIconColor('#006EA5');
    } else {
      document.documentElement.style.setProperty('--color1', '#1e2427');
      document.documentElement.style.setProperty('--color2', '#623d26');
      document.documentElement.style.setProperty('--color3', '#95631e');
      document.documentElement.style.setProperty('--textColor1', '#ffffff');
      document.documentElement.style.setProperty('--textColor2', '#e1dd74');
      document.documentElement.style.setProperty('--textcolor3', '#000000');
      document.documentElement.style.setProperty('--icon-position', 'left');
      setIconColor('#e1dd74');
    }
  };

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      <nav>
        <div className='upperNav'>
          <div className='group1'>
            <div className='Logo'>
              <Link to='/'>SkyNet</Link>
            </div>
            <button id='dayNightSwitcherBtn' onClick={toggleDayNight}>
              <img src={DayNight} alt='day and night mode switcher' />
            </button>
          </div>
          {user.id ? (
            <button
              onClick={menuToggle}
              className={menuOpen ? 'hamburger menu-open' : 'hamburger'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            ''
          )}
          <ul>
            {user.id ? (
              <div className='user-menu'>
                <li className='profile-icon'>
                  <Link to='profile'>
                    <ProfileIcon stroke={iconColor} />
                  </Link>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      dispatch(setDefault());
                      localStorage.removeItem('user');
                      navigateHome('/');
                    }}
                  >
                    Logout
                  </Button>
                </li>
              </div>
            ) : (
              <div className='user-menu'>
                <li>
                  <Link to='/signin'>Sign In</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        {user.id ? (
          <ul className={menuOpen ? 'lowerNav menu-open' : 'lowerNav'}>
            <li>
              <Link to='/accounts'>Accounts</Link>
            </li>
            <li>
              <Link to='/openaccount'>Open New Account</Link>
            </li>
            <li>
              <Link to='/payments'>Payments and Transfers</Link>
            </li>
            <li>
              <Link to='/messages'>Messages</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
