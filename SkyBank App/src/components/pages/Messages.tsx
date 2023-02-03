import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import { IMessageModel } from '../models/MessageModel';

const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--color3);
    color: var(--textColor3);
    transition: all 0.4s;
  }

  .messagesContainer {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 600px;
    background-color: var(--color2);
    ul {
      padding: 20px;
      list-style-type: none;
      li {
        border-top: 1px solid var(--color3);
        padding: 20px;
      }
      .postedTime {
        padding: 10px;
      }
    }
  }
`;

const Messages = () => {
  const [messageList, setMessageList] = useState<IMessageModel[]>([]);
  useEffect(() => {
    const User = window.localStorage.getItem('user');
    let user;
    if (User) {
      user = JSON.parse(User);
    }

    axios
      .get(`http://localhost:8080/users/${user.id}/messages`, {
        withCredentials: true,
      })
      .then((res) => {
        setMessageList(res.data);
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }, []);

  return (
    <StyledMain>
      <h1>Messages</h1>
      <div className='messagesContainer'>
        <ul className='messageList'>
          {messageList.length > 0 ? (
            messageList.map((message) => {
              let timestamp = new Date(message.postDate).toUTCString();
              return (
                <li key={message.id}>
                  <div className='postedTime'>{timestamp}</div>
                  {message.message}
                </li>
              );
            })
          ) : (
            <li>You have no messages</li>
          )}
        </ul>
      </div>
    </StyledMain>
  );
};
export default Messages;
