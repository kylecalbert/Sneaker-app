import React from 'react';
import styled from 'styled-components';
import { sizes, colors } from '../common/constants/constants';
const StyledButton = styled.button`
  background-color: ${colors.primaryOrange};
  padding: 10px 15px;
  color: ${colors.white};
  font-size: ${sizes.small};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 15rem;
  height: 3.3rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.paleOrange};
    color: ${colors.black};
  }
`;

const AddToCartButton = () => {
  return <StyledButton>Add to Cart</StyledButton>;
};

export default AddToCartButton;
