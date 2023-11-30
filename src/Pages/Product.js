import React from 'react';

import {
  Container,
  ProductInfoContainer,
  LeftContainer,
  RightContainer,
  Heading1Container,
  HeadlineContainer,
  BodyContainer,
  PriceContainer,
  ButtonContainer,
} from './Product.styled';
import { Text } from '../common/Text/Text';
import AddToCartButton from '../components/AddToCartButton';
import Incrementor from '../components/Incrementor';
import { DiscountTag } from '../components/DiscountTag';
import ProductGallery from '../components/ProductGallery';
export const Product = () => {
  return (
    <Container>
      <LeftContainer>
        <ProductGallery />
      </LeftContainer>
      <RightContainer>
        <ProductInfoContainer>
          <Heading1Container>
            <Text variant="title">Sneaker Company</Text>
          </Heading1Container>
          <HeadlineContainer>
            <Text variant="headline">Fall Limited Edition Sneakers</Text>
          </HeadlineContainer>
          <BodyContainer>
            <Text variant="body">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </Text>
          </BodyContainer>
          <PriceContainer>
            <Text variant="heading1">$125</Text>
            <DiscountTag />
          </PriceContainer>
          <Text strikethrough variant="body">
            $250
          </Text>
          <ButtonContainer>
            <Incrementor />
            <AddToCartButton />
          </ButtonContainer>
        </ProductInfoContainer>
      </RightContainer>
    </Container>
  );
};
