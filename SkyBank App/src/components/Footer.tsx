import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  position: relative;
  background-color: var(--color2);
  color: var(--textColor1);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  transition: all 0.4s;
  ul {
    list-style-type: none;
    text-align: left;
    margin: auto;
    color: var(--textColor1);
    text-decoration: none;
    li {
      padding: 10px;
      a {
        text-decoration: none;
      }
    }
  }
  div {
    padding: 20px;
    margin: auto;
    text-align: center;
    grid-column: span 2;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <Link to='/openaccount'>Open New Account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
      <div>&copy;2020 SkyNet Global inc.</div>
    </StyledFooter>
  );
};

export default Footer;
