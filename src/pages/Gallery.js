import React, { useState } from 'react';
import styled from 'styled-components';
import product1imagethumb from '../images/image-product-1-thumbnail.jpg';
import product2imagethumb from '../images/image-product-2-thumbnail.jpg';
import product3imagethumb from '../images/image-product-3-thumbnail.jpg';
import product4imagethumb from '../images/image-product-4-thumbnail.jpg';
import product1image from '../images/image-product-1.jpg';
import product2image from '../images/image-product-2.jpg';
import product3image from '../images/image-product-3.jpg';
import product4image from '../images/image-product-4.jpg';
import { colors } from '../common/constants/constants';
export const ImageGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  /* background-color: green; */
  width: 50%;
`;

export const FullWidthItem = styled.div`
  grid-column: span 4;
  grid-row: span 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  margin-bottom: 0.5rem;
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
`;

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, thumb: product1imagethumb, large: product1image },
    { id: 2, thumb: product2imagethumb, large: product2image },
    { id: 3, thumb: product3imagethumb, large: product3image },
    { id: 4, thumb: product4imagethumb, large: product4image },
  ];

  const handleImageClick = (id) => {
    const selected = images.find((img) => img.id === id);
    setSelectedImage(selected ? selected.large : null);
  };

  return (
    <ImageGalleryContainer>
      {selectedImage && (
        <FullWidthItem>
          <img src={selectedImage} alt={`Larger ${selectedImage}`} />
        </FullWidthItem>
      )}

      {images.map((image) => (
        <GridItem
          key={image.id}
          onClick={() => handleImageClick(image.id)}
          isSelected={selectedImage === image.large}
        >
          <img src={image.thumb} alt={`Thumbnail ${image.id}`} />
        </GridItem>
      ))}
    </ImageGalleryContainer>
  );
};
