import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        - 오지현, (우리라는 계절) -
        <br />
        <br />
        봄의 우리는 꽃과 함께 사랑을 피우고
        <br />
        여름의 우리는 햇살과 함께 사랑을 키우며
        <br />
        가을의 우리는 단풍과 함께 사랑을 물들이고
        <br />
        겨울의 우리는 눈과 함께 사랑을 쌓아간다
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
