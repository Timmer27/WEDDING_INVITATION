import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto0 from "../assets/Gallery_Photo_0.jpg";
import GalleryPhoto1 from "../assets/Gallery_Photo_1.jpg";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.jpg";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.jpg";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.jpg";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.jpg";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.jpg";
import GalleryPhoto7 from "../assets/Gallery_Photo_7.jpg";
import GalleryPhoto8 from "../assets/Gallery_Photo_8.jpg";
import GalleryPhoto9 from "../assets/Gallery_Photo_9.jpg";
import GalleryPhoto11 from "../assets/Gallery_Photo_11.jpg";
import GalleryPhoto12 from "../assets/Gallery_Photo_12.jpg";
import GalleryPhoto13 from "../assets/Gallery_Photo_13.jpg";
import GalleryPhoto14 from "../assets/Gallery_Photo_14.jpg";
import GalleryPhoto16 from "../assets/Gallery_Photo_16.jpg";
import GalleryPhoto17 from "../assets/Gallery_Photo_17.jpg";
import GalleryPhoto18 from "../assets/Gallery_Photo_18.jpg";
import GalleryPhoto19 from "../assets/Gallery_Photo_19.jpg";
import GalleryPhoto20 from "../assets/Gallery_Photo_20.jpg";
import GalleryPhoto0Thumb from "../assets/gallery-thumbs/Gallery_Photo_0.jpg";
import GalleryPhoto1Thumb from "../assets/gallery-thumbs/Gallery_Photo_1.jpg";
import GalleryPhoto2Thumb from "../assets/gallery-thumbs/Gallery_Photo_2.jpg";
import GalleryPhoto3Thumb from "../assets/gallery-thumbs/Gallery_Photo_3.jpg";
import GalleryPhoto4Thumb from "../assets/gallery-thumbs/Gallery_Photo_4.jpg";
import GalleryPhoto5Thumb from "../assets/gallery-thumbs/Gallery_Photo_5.jpg";
import GalleryPhoto6Thumb from "../assets/gallery-thumbs/Gallery_Photo_6.jpg";
import GalleryPhoto7Thumb from "../assets/gallery-thumbs/Gallery_Photo_7.jpg";
import GalleryPhoto8Thumb from "../assets/gallery-thumbs/Gallery_Photo_8.jpg";
import GalleryPhoto9Thumb from "../assets/gallery-thumbs/Gallery_Photo_9.jpg";
import GalleryPhoto11Thumb from "../assets/gallery-thumbs/Gallery_Photo_11.jpg";
import GalleryPhoto12Thumb from "../assets/gallery-thumbs/Gallery_Photo_12.jpg";
import GalleryPhoto13Thumb from "../assets/gallery-thumbs/Gallery_Photo_13.jpg";
import GalleryPhoto14Thumb from "../assets/gallery-thumbs/Gallery_Photo_14.jpg";
import GalleryPhoto16Thumb from "../assets/gallery-thumbs/Gallery_Photo_16.jpg";
import GalleryPhoto17Thumb from "../assets/gallery-thumbs/Gallery_Photo_17.jpg";
import GalleryPhoto18Thumb from "../assets/gallery-thumbs/Gallery_Photo_18.jpg";
import GalleryPhoto19Thumb from "../assets/gallery-thumbs/Gallery_Photo_19.jpg";
import GalleryPhoto20Thumb from "../assets/gallery-thumbs/Gallery_Photo_20.jpg";

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

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1Thumb,
  },
  {
    original: GalleryPhoto0,
    thumbnail: GalleryPhoto0Thumb,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2Thumb,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3Thumb,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4Thumb,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5Thumb,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6Thumb,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7Thumb,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8Thumb,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9Thumb,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11Thumb,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12Thumb,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13Thumb,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14Thumb,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16Thumb,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17Thumb,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18Thumb,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19Thumb,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20Thumb,
  },
].map((image, index) => ({
  ...image,
  loading: index === 0 ? "eager" : "lazy",
  thumbnailLoading: "lazy",
  originalAlt: `Wedding gallery photo ${index + 1}`,
  thumbnailAlt: `Wedding gallery thumbnail ${index + 1}`,
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
