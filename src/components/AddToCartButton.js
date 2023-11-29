import React from 'react';
import { Text } from '../common/Text/Text';
import { FaCartPlus } from 'react-icons/fa';
import { StyledButton, IconWrapper } from './AddToCartButton.styled';

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
