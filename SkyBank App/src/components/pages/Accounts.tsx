import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { selectUser, setUser } from '../../shared/UserSlicer';
import MakeAll from '../AllAccounts';
import getAllEI from '../AllIncomeExpense';
import getAll from '../AllTransactions';

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--color3);
    color: var(--color1);
  }
  .table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    border: 1px solid;
  }
  th {
    width: 25%;
    padding: 10px;
  }

  .columns {
    background-color: var(--color3);
    color: var(--textColor3);
    padding: 10px;
  }
  tr {
    background-color: var(--color1);
  }
  tr:nth-child(even) {
    background-color: var(--color2);
  }
  td {
    padding: 10px;
  }
  .name {
    font-size: 1rem;
    padding: 10px;
    font-weight: bold;
    background-color: var(--color2);
    color: var(--textColor2);
    margin: 10px;
  }

  .balance {
    font-size: 20px;
  }

  .accounts {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .all {
    width: 25%;
    text-align: center;
    box-sizing: border-box;
  }
  .income {
    color: green;
  }

  .expense {
    color: red;
  }
`;

const Accounts = () => {
  const [accounts, setAccounts] = useState(<div></div>);
  const [transactions, setTransactions] = useState(<tbody></tbody>);
  const [incomeExpense, setincomeExpense] = useState(<tbody></tbody>);

  useEffect(() => {
    const User = window.localStorage.getItem('user');
    let user;
    if (User) {
      user = JSON.parse(User);
    }
    axios
      .get(`http://localhost:8080/users/${user.id}/balance`, {
        withCredentials: true,
      })
      .then((response) => {
        setAccounts(MakeAll(response.data));
      });

    axios
      .get(`http://localhost:8080/users/${user.id}/transactions`, {
        withCredentials: true,
      })
      .then((response) => {
        setTransactions(getAll(response.data));
      });
      axios
      .get(`http://localhost:8080/users/${user.id}/expenseincome`, {
        withCredentials: true,
      })
      .then((response) => {
        setincomeExpense(getAllEI(response.data[0], response.data[1]));
      });
  }, []);

  return (
    <StyledMain>
      <div>
        <h1>Accounts Page</h1>
      </div>

      {accounts}

      <div>
        <h3>Income and Expenses</h3>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr className='columns'>
              <th>Date</th>
              <th>Amount</th>
              <th>Entity</th>
              <th>Account</th>
            </tr>
          </thead>
          {incomeExpense}
        </table>
      </div>

      <div>
        <h3>Transfers</h3>
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr className='columns'>
              <th>Date</th>
              <th>Amount</th>
              <th>Sender/Reciever</th>
              <th>Message</th>
            </tr>
          </thead>
          {transactions}
        </table>
      </div>
    </StyledMain>
  );
};

export default Accounts;
