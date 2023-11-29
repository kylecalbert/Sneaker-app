import React from 'react';
import {
  Container,
  HeadlineContainer,
  LeftContainer,
  RightContainer,
  Heading1Container,
  BodyContainer,
  PriceContainer,
  ButtonContainer,
} from './Product.styled';
import { Text } from '../common/Text/Text';
import AddToCartButton from '../components/AddToCartButton';
export const Product = () => {
  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <Heading1Container>
          <Text variant="title">Sneaker Company</Text>
        </Heading1Container>

        <HeadlineContainer>
          <Text variant="Headline">Fall Limited Edition Sneakers</Text>
        </HeadlineContainer>

        <BodyContainer>
          <Text variant="body">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </Text>
        </BodyContainer>

        <PriceContainer>
          <Text variant="Heading1">$125</Text>
          <Text strikethrough variant="body">
            $250
          </Text>
        </PriceContainer>

        <ButtonContainer>
          <AddToCartButton />
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};
