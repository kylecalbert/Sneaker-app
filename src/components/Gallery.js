import React, { useState } from 'react';
import product1imagethumb from '../images/image-product-1-thumbnail.jpg';
import product2imagethumb from '../images/image-product-2-thumbnail.jpg';
import product3imagethumb from '../images/image-product-3-thumbnail.jpg';
import product4imagethumb from '../images/image-product-4-thumbnail.jpg';
import product1image from '../images/image-product-1.jpg';
import product2image from '../images/image-product-2.jpg';
import product3image from '../images/image-product-3.jpg';
import product4image from '../images/image-product-4.jpg';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import {
  ImageGalleryContainer,
  FullWidthItem,
  GridItem,
  LeftButton,
  RightButton,
} from './Gallery.styled';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(product1image);

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

          <RightButton>
            <IoMdArrowDropright />
          </RightButton>
          <LeftButton>
            <IoMdArrowDropleft />
          </LeftButton>
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
