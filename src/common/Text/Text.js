import React from 'react';
import styled from 'styled-components';

import { colors, fontWeight, sizes } from '../constants/constants';

export const textStyles = {
  body: {
    fontSize: sizes.extraSmall,
    color: colors.darkGrayishBlue,
  },
  headline: {
    fontSize: sizes.extraLarge,
    fontWeight: fontWeight.bold,
    color: fontWeight.black,
  },
  title: {
    fontSize: sizes.medium,
    fontWeight: fontWeight.bold,
    color: colors.primaryOrange,
  },
  heading1: {
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
  },

  buttonText: {
    fontSize: sizes.extraSmall,
    fontWeight: fontWeight.bold,
    color: colors.white,
  },
};

const StyledText = styled.div`
  color: ${(props) => textStyles[props.variant]?.color || 'black'};
  font-size: ${(props) => textStyles[props.variant]?.fontSize || '1rem'};
  font-weight: ${(props) => textStyles[props.variant]?.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  text-decoration: ${(props) =>
    props.strikethrough ? 'line-through' : 'none'};
`;

export const Text = ({ variant, strikethrough, children, ...props }) => {
  return (
    <StyledText variant={variant} strikethrough={strikethrough} {...props}>
      {children}
    </StyledText>
  );
};
