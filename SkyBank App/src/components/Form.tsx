import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 20px auto;
  background-color: var(--color2);
  color: var(--textColor1);
  input,
  select {
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 5px;
    padding: 5px;
    width: 350px;
  }
  label {
    padding: 15px 0px 8px 0px;
  }
  &.grid-2col {
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 900px;
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      max-width: 100%;
    }
    label {
      display: block;
      padding: 5px 0px 2px 0px;
    }
    input,
    select {
      font-size: 1rem;
      border-radius: 10px;
      border: none;
      box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.2);
      margin: 5px;
      padding: 5px;
      width: 300px;
    }
    .span2 {
      grid-column: span 2;
      margin: auto;
      display: block;
    }
    button {
      grid-column: span 2;
    }
  }
`;

interface Props {
  readonly children: React.ReactNode;
  action?: string;
  className?: string;
  method?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = (props) => {
  function defaultOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <StyledForm
      action={props.action ? props.action : ''}
      className={props.className ? props.className : ''}
      method={props.method ? props.method : ''}
      onSubmit={props.onSubmit ? props.onSubmit : defaultOnSubmit}
    >
      {props.children}
    </StyledForm>
  );
};

export default Form;
