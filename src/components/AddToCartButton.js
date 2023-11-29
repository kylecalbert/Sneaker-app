import React from 'react';
import styled from 'styled-components';
import { sizes, colors } from '../common/constants/constants';
import { Text } from '../common/Text/Text';
import { FaCartPlus } from 'react-icons/fa';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryOrange};
  padding: 10px 15px;
  color: ${colors.white};
  font-size: ${sizes.small};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 18rem;
  height: 3.7rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.paleOrange};
    color: ${colors.black};
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px;
`;

const AddToCartButton = () => {
  return (
    <StyledButton>
      <IconWrapper>
        <FaCartPlus />
      </IconWrapper>

      <Text> Add to Cart</Text>
    </StyledButton>
  );
};

export default AddToCartButton;
