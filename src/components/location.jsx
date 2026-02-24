import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const MapBox = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // ✅ 퍼가기 코드에 나온 timestamp/key를 "한 세트"로 맞추세요
  const ROUGHMAP_TIMESTAMP = "1771936585362";
  const ROUGHMAP_KEY = "ibnwzvo9zrs"; // <- 실제 퍼가기 코드의 key로 맞추기
  const CONTAINER_ID = `daumRoughmapContainer${ROUGHMAP_TIMESTAMP}`;

  useEffect(() => {
    // React 18 StrictMode(dev)에서 effect 2번 실행될 수 있어 중복 방지
    const scriptId = "kakao-roughmap-lander";
    const existing = document.getElementById(scriptId);

    const renderMap = () => {
      if (!window.daum?.roughmap?.Lander) return;

      // 이미 렌더된 경우 중복 방지 (필요 시 컨테이너 비우기)
      const container = document.getElementById(CONTAINER_ID);
      if (!container) return;

      // container.innerHTML = ""; // 필요하면 주석 해제 (중복 렌더 방지용)

      new window.daum.roughmap.Lander({
        timestamp: ROUGHMAP_TIMESTAMP,
        key: ROUGHMAP_KEY,
        mapWidth: "640",
        mapHeight: "360",
      }).render();
    };

    if (existing) {
      // 스크립트가 이미 있으면 바로 렌더 시도
      renderMap();
      return;
    }

    // ✅ 카카오맵 설정 초기화 및 roughmapLander.js 로드
    const c = window.location.protocol === "https:" ? "https:" : "http:";
    const a = "20250630";
    const p = "prod";

    window.daum = window.daum || {};
    window.daum.roughmap = {
      phase: p,
      cdn: a,
      URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
      url_protocal: c,
      url_cdn_domain: "//t1.daumcdn.net",
    };

    const src =
      c +
      "//t1.daumcdn.net/kakaomapweb/roughmap/place/" +
      p +
      "/" +
      a +
      "/roughmapLander.js";

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = src;
    script.async = true;
    script.onload = () => {
      renderMap();
    };

    document.head.appendChild(script);

    // cleanup (선택)
    return () => {
      // 보통은 스크립트를 지우지 않는 편이 안전합니다.
      // 필요하면 여기서 map cleanup 로직만 추가하세요.
    };
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>

      <Image src={Flower} alt="flower" />

      <MapBox
        id={CONTAINER_ID}
        className="root_daum_roughmap root_daum_roughmap_landing"
      />

      <Content>
        강원 강릉시 해안로406번길 2
        <br />
        씨마크호텔
      </Content>
    </Wrapper>
  );
};

export default Location;
