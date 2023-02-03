import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectUser, setUser } from '../../shared/UserSlicer';
import Button from '../Button';
import Form from '../Form';

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--color3);
    color: var(--textColor3);
  }
  p {
    padding: 20px;
    max-width: 750px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: left;
    margin: auto;
  }
  .openaccount-container {
    min-height: calc(100vh - 350px);
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const OpenAccount = () => {
  const [accountData, setAccountData] = useState({
    fkAccountType: 1,
    nickname: '',
    balance: '',
  });

  const [userData, setUserData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    ssn: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  let navigateProfile = useNavigate();

  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  function onSubmitLoggedIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users/${user.id}/accounts`,
        {
          fkAccountType: accountData.fkAccountType,
          nickname: accountData.nickname,
          balance: accountData.balance,
        },
        { withCredentials: true }
      )
      .then((resp) => {
        navigateProfile('/Profile');
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }
  function onSubmitNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert('Password mismatch');
      return;
    }
    axios
      .post(
        `http://localhost:8080/register`,
        {
          firstName: userData.firstName,
          middleInitial: userData.middleInitial,
          lastName: userData.lastName,
          ssn: userData.ssn,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          country: userData.country,
          state: userData.state,
          city: userData.city,
          zipcode: userData.zipcode,
          username: userData.username,
          password: userData.password,
        },
        { withCredentials: true }
      )
      .then((resp) => {
        dispatch(setUser(resp.data));
        window.localStorage.setItem('user', JSON.stringify(resp.data));
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }
  function handleAccountInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setAccountData({
      ...accountData,
      [e.target.name]: value,
    });
  }
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setAccountData({
      ...accountData,
      [e.target.name]: value,
    });
  }

  function handleUserInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  }

  useEffect(() => {
    for (let field in userData) {
      setButtonDisabled(false);
      if (field === 'middleInitial') {
        continue;
      }
      if (!userData[field as keyof typeof userData]) {
        setButtonDisabled(true);
        break;
      }
    }
  }, [userData]);

  return (
    <StyledMain>
      <h1>Let's create a new SkyBank Account</h1>
      <section className='openaccount-container'>
        {user.id ? (
          <p>Choose an account type, nickname and initial deposit amount.</p>
        ) : (
          <p>Joining SkyBank is as easy as filling out the form below.</p>
        )}
        {user.id ? (
          <Form method='post' onSubmit={onSubmitLoggedIn}>
            <label htmlFor='accountType'>Account Type</label>
            <select
              value={accountData.fkAccountType}
              onChange={handleSelectChange}
              name='fkAccountType'
            >
              <option value='1'>Checking</option>
              <option value='2'>Saving</option>
            </select>
            <label htmlFor='nickname'>Nickname</label>
            <input
              id='nickname'
              value={accountData.nickname}
              name='nickname'
              type='text'
              onChange={handleAccountInputChange}
            ></input>
            <label htmlFor='balance'>Initial deposit</label>
            <input
              id='balance'
              value={accountData.balance}
              name='balance'
              type='number'
              onChange={handleAccountInputChange}
            ></input>
            {!user.id && (
              <p>
                Already a member? <Link to='/signin'>Sign In</Link>
              </p>
            )}
            <Button>{!user.id ? 'Next' : 'Create'}</Button>
          </Form>
        ) : (
          <Form className='grid-2col' onSubmit={onSubmitNewUser}>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                value={userData.firstName}
                id='firstName'
                name='firstName'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='middleInitial'>Middle Initial</label>
              <input
                value={userData.middleInitial}
                id='middleInitial'
                name='middleInitial'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                value={userData.lastName}
                id='lastName'
                name='lastName'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='ssn'>
                <span title='Social Security Number'>SSN</span> or{' '}
                <span title='Tax ID Number'>TIN</span>
              </label>
              <input
                value={userData.ssn}
                id='ssn'
                name='ssn'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                value={userData.email}
                id='email'
                name='email'
                type='email'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone Number</label>
              <input
                value={userData.phoneNumber}
                id='phone'
                name='phoneNumber'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='country'>country</label>
              <input
                value={userData.country}
                id='country'
                name='country'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              {' '}
              <label htmlFor='state'>State</label>
              <input
                value={userData.state}
                id='state'
                name='state'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                value={userData.city}
                id='city'
                name='city'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='zipcode'>Zipcode</label>
              <input
                value={userData.zipcode}
                id='zipcode'
                name='zipcode'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div className='span2'>
              <label htmlFor='username'>Username</label>
              <input
                value={userData.username}
                id='username'
                name='username'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div className='span2'>
              <label htmlFor='password'>Password</label>
              <input
                value={userData.password}
                id='password'
                name='password'
                type='password'
                onChange={handleUserInputChange}
              />
            </div>

            <div className='span2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                value={userData.confirmPassword}
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                onChange={handleUserInputChange}
              />
            </div>

            <Button disabled={buttonDisabled ? true : false} className='span2'>
              Next
            </Button>
          </Form>
        )}
      </section>
    </StyledMain>
  );
};

export default OpenAccount;
