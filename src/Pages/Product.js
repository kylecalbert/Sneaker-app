import React from 'react';
import { Container, LeftContainer, RightContainer } from './Product.styled';

import AddToCartButton from '../components/AddToCartButton';
export const Product = () => {
  return (
    <Container>
      <LeftContainer>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </LeftContainer>
      <RightContainer>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </RightContainer>
    </Container>
  );
};
