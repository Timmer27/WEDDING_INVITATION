import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        첫 눈이 소복이 내리던 겨울,
        <br />
        같은 초성을 가진 두 사람이 만나
        <br />
        서로를 향해 흘러온 시간을 마주한 순간,
        <br />
        우리는 한눈에 서로를 알아보았습니다.
        <br />
        <br />
        사계절을 함께 걸으며 천천히,
        <br />
        그리고 곱게 사랑을 피워온 우리는
        <br />
        이제 ‘부부’라는 이름의
        <br />
        새로운 계절을 맞이하려 합니다.
        <br />
        의견이 다를 때에도 <span style={{ color: "var(--title-color)", fontWeight: 900, fontSize: "1.1em" }}>지</span>나치지 않고,
        <br />
        서로의 마음을 <span style={{ color: "var(--title-color)", fontWeight: 900, fontSize: "1.1em" }}>현</span>명하고 부드럽게 다독이며,
        <br />
        다툼보다는 이해로 하루를 채우겠습니다.
        <br />
        <br />
        <span style={{ color: "var(--title-color)", fontWeight: 900, fontSize: "1.1em" }}>종</span>일토록 함께할 수 있음에 감사하며,
        <br />
        마치 숨 쉬는 <span style={{ color: "var(--title-color)", fontWeight: 900, fontSize: "1.1em" }}>호</span>흡처럼 자연스럽고 편안한 사랑을
        <br />
        평생 지켜나갈 것을 약속드립니다.
        <br />
        <br />
        소중한 분들 앞에서 그 약속을 나누는 날,
        <br />
        기꺼이 발걸음 해주시어
        <br />
        저희의 시작에 따스한 축복을 더해주신다면
        <br />
        더없는 기쁨이 될 것입니다.
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
