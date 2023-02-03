import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import Button from '../Button';
import { StyledHeader } from '../Header';
import UpdateProfile from './UpdateProfile';

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--color3);
    color: #fff;
  }
  .table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid;
  }
  th {
    width: 25%;
    padding: 10px;
  }
  td {
    padding: 10px;
  }
  .button {
    background-color: var(--primary);
    border: none;
    width: 200px;
    padding: 5px;
    border-radius: 15px;
    font-size: 1.5rem;
    color: #fff;
    margin: 10px auto;
    display: block;
    &:hover {
      background-color: var(--primaryMedium);
    }
    text-align: center;
  }
`;

const Profile = () => {
  const User = useAppSelector(selectUser);

  return (
    <StyledMain>
      <div>
        <h1>Profile Page</h1>
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr className='userInfo-columns'>
              <th scope='col'>Name</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Email Address</th>
              <th scope='col'>Home Address</th>
            </tr>
          </thead>

          <tbody>
            <tr className='info'>
              <td>
                {`${User.firstName} ${User.middleInitial} ${User.lastName}`}
              </td>
              <td>{User.phoneNumber}</td>
              <td>{User.email}</td>
              <td>
                {`${User.city}, ${User.state}, ${User.zipcode}, ${User.country}`}
              </td>
            </tr>
          </tbody>
        </table>
        <div className='button'>
          <Link to={'/updateprofile'}>Update Profile</Link>
        </div>
      </div>
    </StyledMain>
  );
};

export default Profile;
