import React from 'react';
import styled from 'styled-components';

import { colors, fontWeight, sizes } from '../constants/constants';

export const textStyles = {
  body: {
    fontSize: sizes.extraSmall,
    color: colors.darkGrayishBlue,
    mobileFontSize: sizes.smallMobile,
  },
  headline: {
    fontSize: sizes.extraLarge,
    fontWeight: fontWeight.bold,
    color: colors.black,
    mobileFontSize: sizes.largeMobile,
  },
  title: {
    fontSize: sizes.medium,
    fontWeight: fontWeight.bold,
    color: colors.primaryOrange,
    mobileFontSize: sizes.mediumMobile,
  },
  heading1: {
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
    mobileFontSize: sizes.largeMobile,
  },
  buttonText: {
    fontSize: sizes.extraSmall,
    fontWeight: fontWeight.bold,
    color: colors.white,
    mobileFontSize: sizes.smallMobile,
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

  @media (max-width: 968px) {
    font-size: ${(props) =>
      textStyles[props.variant]?.mobileFontSize || '1rem'};
  }
`;

export const Text = ({ variant, strikethrough, children, ...props }) => {
  return (
    <StyledText variant={variant} strikethrough={strikethrough} {...props}>
      {children}
    </StyledText>
  );
};
