import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import OptimizedPicture from "./optimizedPicture";
import { galleryImages } from "../data/galleryImages";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const renderGalleryItem = (image) => {
  return (
    <OptimizedPicture
      avifSrc={image.avifSrc}
      webpSrc={image.webpSrc}
      fallbackSrc={image.fallbackSrc}
      alt={image.originalAlt}
      imgClassName="image-gallery-image"
      loading={image.loading}
      decoding="async"
    />
  );
};

const images = galleryImages.map((image, index) => ({
  ...image,
  original: image.fallbackSrc,
  loading: index === 0 ? "eager" : "lazy",
  thumbnailLoading: "lazy",
  renderItem: () => renderGalleryItem({
    ...image,
    loading: index === 0 ? "eager" : "lazy",
  }),
}));

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
        <Title>넘겨보세요!</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
