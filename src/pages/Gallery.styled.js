import styled from 'styled-components';
import { colors } from '../common/constants/constants';

export const ImageGalleryContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 50%;
  background-color: blue;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FullWidthItem = styled.div`
  background-color: green;
  grid-column: span 4;
  grid-row: span 1;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    position: relative;
    img {
      border-radius: 0;
    }
  }
`;

export const GridItem = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  img {
    width: 100%;
    height: 100%;
    border: ${(props) =>
      props.isSelected ? `0.2rem solid ${colors.primaryOrange}` : '0'};

    border-radius: 0.8rem;
    opacity: ${(props) => (props.isSelected ? '0.7' : '1')};
  }

  &:hover {
    cursor: pointer;

    img {
      border: 0.2rem solid ${colors.primaryOrange};
      border-radius: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightButton = styled.button`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    transform: translateY(-50%);
    font-size: 2rem;
    cursor: pointer;
    color: black;
    text-decoration: none;
    background-color: none;
    border-radius: 100%;
    padding: 0.2rem;
    border: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
