import React from 'react';
import styled from 'styled-components';
import { Text } from '../common/Text/Text';
import { colors } from '../common/constants/constants';
export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 2.2rem;
  background-color: ${colors.paleOrange};
  border-radius: 0.3rem;
  margin-left: 1rem;
`;
export const DiscountTag = () => {
  return (
    <DiscountContainer>
      <Text variant="title">50%</Text>
    </DiscountContainer>
  );
};
