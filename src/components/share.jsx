import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  width: 100%;

  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background-color: rgba(217, 125, 131, 0.2);
  border-color: rgba(217, 125, 131, 0.2) !important;
  color: var(--title-color) !important;
  font-weight: 400 !important;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: rgb(217 125 131 / 48%) !important;
    border-color: rgb(217 125 131 / 48%) !important;
    color: var(--title-color) !important;
  }
  &:focus {
    background-color: rgb(217 125 131 / 48%) !important;
    border-color: rgb(217 125 131 / 48%) !important;
    color: var(--title-color) !important;
  }
`;

const Share = () => {
  const shareKakao = () => {
    if (!window.Kakao) {
      message.error("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    const kakao = window.Kakao;

    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      kakao.init(KAKAOTALK_API_TOKEN); // 반드시 JavaScript 키여야 함
    }
    
    // SDK 초기화 여부를 판단합니다.
    kakao.isInitialized();

    try {
      // 메세지 꾸미는 부분
      kakao.Share.sendDefault({
        objectType: "feed", // 이미지 + 텍스트의 경우 feed
        content: {
          title: `${GROOM_NAME}🩷${BRIDE_NAME} 결혼식에 초대합니다`, // 원하는 타이틀
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰", // 텍스트
          imageUrl: KAKAOTALK_SHARE_IMAGE, //이미지 링크
          link: {
            mobileWebUrl: WEDDING_INVITATION_URL, // 연결될 모바일 웹 링크
            webUrl: WEDDING_INVITATION_URL, // 연결될 pc 웹 링크
          },
        },
        buttons: [
          {
            title: "모바일 청첩장 보기", // 메세지 내에 버튼에 쓰여질 텍스트
            link: {
              mobileWebUrl: WEDDING_INVITATION_URL, // 연결될 모바일 웹 링크
              webUrl: WEDDING_INVITATION_URL, // 연결될 모바일 웹 링크
            },
          },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
      });

      message.success("카카오톡으로 청첩장을 공유합니다!");
    } catch (e) {
      console.error(e);
      message.error("카카오톡 공유에 실패했습니다. 설정/도메인 등록을 확인해주세요.");
    }
  };

  return (
    <Wrapper>
      <Divider data-aos="fade-up" plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>청첩장 공유하기</Title>
      </Divider>

      <KakaoTalkShareButton
        style={{ margin: 0 }}
        icon={<MessageFilled />}
        size="large"
        onClick={shareKakao}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>

      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <LinkShareButton
          style={{ margin: 0 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
        >
          링크로 공유하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;