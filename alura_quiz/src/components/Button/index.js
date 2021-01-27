import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 1rem;
  border-radius: 3px;
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
    <ButtonWrapper {...props}>
      <span>{props.texto}</span>
    </ButtonWrapper>
  );
}
