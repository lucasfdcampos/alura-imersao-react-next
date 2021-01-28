/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  outline: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }

  span {
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

export default function Button(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper {...props}>
      <span>{props.texto}</span>
    </ButtonWrapper>
  );
}
