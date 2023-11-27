import React from 'react';
import styled from 'styled-components';

import { colors,fontWeight,sizes } from '../constants/constants';

const textStyles = {
  body: {
    fontSize: sizes.small,
    color:colors.black
  },
  Headline: {
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
    colors:fontWeight.black,
  },
  title: {
    fontSize: sizes.medium,
    fontWeight: fontWeight.bold,
  },
};

const StyledText = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => textStyles[props.variant]?.fontSize || '1rem'};
  font-weight: ${(props) => textStyles[props.variant]?.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export const Text = ({ variant, children, ...props }) => {
  return (
    <StyledText variant={variant} {...props}>
      {children}
    </StyledText>
  );
};
