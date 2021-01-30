/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  
  color: ${({ theme }) => theme.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
  
  ${(props) => (props.disabled
    ? css`
          background-color: ${({ theme }) => theme.colors.disabled};
          cursor: not-allowed;
          :hover {
            background-color: ${({ theme }) => theme.colors.disabled};
          }
        `
    : css`
          background-color: ${({ theme }) => theme.colors.secondary};
          cursor: pointer;
        `)};
  
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

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
};
