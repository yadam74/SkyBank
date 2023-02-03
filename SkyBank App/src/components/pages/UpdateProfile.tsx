import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectUser, setUser } from '../../shared/UserSlicer';
import Button from '../Button';
import Form from '../Form';

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--color3);
    color: #fff;
  }
  > p {
    text-align: center;
    padding: 20px;
  }
`;
const UpdateProfile = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [info, setInfo] = useState({
    firstName: user.firstName,
    middleInitial: user.middleInitial,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    country: user.country,
    state: user.state,
    city: user.city,
    zipcode: user.zipcode,
  });

  useEffect(() => {
    const User = window.localStorage.getItem('user');
    let user;
    if (User) {
      user = JSON.parse(User);
    }
    setInfo({
      firstName: user.firstName,
      middleInitial: user.middleInitial,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      country: user.country,
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
    });
  }, []);

  let navigateProfile = useNavigate();

  function handleTransferInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInfo({
      ...info,
      [e.target.name]: value,
    });
  }

  function onSubmitInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/update/${user.id}`, {
        firstName: info.firstName,
        middleInitial: info.middleInitial,
        lastName: info.lastName,
        email: info.email,
        phoneNumber: info.phoneNumber,
        country: info.country,
        state: info.state,
        city: info.city,
        zipcode: info.zipcode,
      })
      .then((response) => {
        console.log(response);
        dispatch(setUser(response.data));
        window.localStorage.setItem('user', JSON.stringify(response.data));
        navigateProfile('/profile');
      });
  }

  return (
    <StyledMain>
      <h1>Update Profile</h1>
      <p>Please fill out only the information you want to change</p>
      <Form method='patch' onSubmit={onSubmitInfo}>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          value={info.firstName}
          name='firstName'
          type='text'
          placeholder={info.firstName}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='middleInitial'>Middle Initial</label>
        <input
          id='middleInitial'
          value={info.middleInitial}
          name='middleInitial'
          type='text'
          placeholder={info.middleInitial}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          value={info.lastName}
          name='lastName'
          type='text'
          placeholder={info.lastName}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          value={info.email}
          name='email'
          type='text'
          placeholder={info.email}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          id='phoneNumber'
          value={info.phoneNumber}
          name='phoneNumber'
          type='text'
          placeholder={info.phoneNumber}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='country'>Country</label>
        <input
          id='country'
          value={info.country}
          name='country'
          type='text'
          placeholder={info.country}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='state'>State</label>
        <input
          id='state'
          value={info.state}
          name='state'
          type='text'
          placeholder={info.state}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='city'>City</label>
        <input
          id='city'
          value={info.city}
          name='city'
          type='text'
          placeholder={info.city}
          onChange={handleTransferInputChange}
        ></input>
        <label htmlFor='zipcode'>Zipcode</label>
        <input
          id='zipcode'
          value={info.zipcode}
          name='zipcode'
          type='text'
          placeholder={info.zipcode}
          onChange={handleTransferInputChange}
        ></input>
        <Button className='span2'>Update Info</Button>
      </Form>
    </StyledMain>
  );
};
export default UpdateProfile;
