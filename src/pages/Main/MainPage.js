import React, { useState, useEffect } from "react";
import { Layout, Box, Sns } from "../../components";

import styled from "styled-components";
const MainPage = () => {
  return (
    <Layout>
      <Container>
        {/* 상단 sns  */}
        <SectionA>
          <DIV>
            <SnsWrapper>
              <Sns />
            </SnsWrapper>
          </DIV>
        </SectionA>

        {/* section2  video */}
        <SectionB>
          <FlexDIV>
            <VideoBox>
              <Video
                noControls
                muted
                autoPlay
                playsInline
                loop
                src="/assets/vedio/main_video.mp4"
                type="video/mp4"
              ></Video>
            </VideoBox>

            <FlexDIVA column>
              <ImgBox>
                <img src="/assets/img/logo2.svg" alt="logoimage" />
              </ImgBox>

              <TextWrap>
                <p>
                  5,000 마리의 라이언즈들은 그 무엇도 두려워하지 않습니다
                  그들에겐 세상을 바꿀 용기와 세상을 바꿀 힘이 있습니다
                  <br />
                  <br />
                  라이언즈와 함께 세상을 바꿔보시겠습니까?
                </p>
              </TextWrap>
            </FlexDIVA>
          </FlexDIV>
        </SectionB>

        <SectionC>
          <DIV>3</DIV>
        </SectionC>

        <SectionD>
          <DIV>4</DIV>
        </SectionD>

        <SectionE>
          <DIV>5</DIV>
        </SectionE>

        <SectionF>
          <DIV></DIV>
          <Box percent={100} />
        </SectionF>
      </Container>
    </Layout>
  );
};

export default MainPage;
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const DIV = styled.div`
  width: 100%;
`;
const FlexDIV = styled.div`
  display: flex;
  justify-content: flex-start;

  ${(props) => (props.column ? `flex-direction: column;` : null)}
`;
const FlexDIVA = styled(FlexDIV)`
  width: 579px;
  align-items: flex-start;
  margin-top: 187px;
  margin-left: 220px;
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: 346px;
`;
const SectionA = styled(Section)`
  width: 100%;
  margin-bottom: 14px;
`;
const SectionB = styled(Section)``;
const ImgBox = styled.div``;
const TextWrap = styled.div`
  & p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 28px;
    color: var(--white);
  }
`;
const SectionC = styled(Section)``;
const SectionD = styled(Section)``;
const SectionE = styled(Section)``;
const SectionF = styled(Section)``;

const SnsWrapper = styled.div`
  margin: 55px 0px 14px 0px;
`;
const VideoBox = styled(DIV)`
  width: 896px;
`;
const Video = styled.video`
  width: 100%;
`;
