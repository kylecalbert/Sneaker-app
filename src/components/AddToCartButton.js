import React from 'react';
import { Text } from './Text/Text';
import { FaCartPlus } from 'react-icons/fa';
import { StyledButton, IconWrapper } from './AddToCartButton.styled';

const AddToCartButton = () => {
  return (
    <StyledButton>
      <IconWrapper>
        <FaCartPlus />
      </IconWrapper>

      <Text variant="buttonText"> Add to Cart</Text>
    </StyledButton>
  );
};

export default AddToCartButton;
