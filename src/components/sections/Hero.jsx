import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/test7.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 50px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.25;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: block;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin: 14px 0 20px 0;
  min-height: 78px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    min-height: 62px;
  }

  @media (max-width: 640px) {
    font-size: 19px;
    min-height: 56px;
  }
`;

const Prefix = styled.span`
  white-space: nowrap;
  margin-right: 10px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  display: inline;
`;

const SubTitle = styled.div`
  font-size: 17px;
  line-height: 1.65;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 580px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 15px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 14px 28px;
  background: linear-gradient(225deg, #854ce6 0%, #be1adb 100%);
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 20px rgba(133, 76, 230, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(133, 76, 230, 0.6);
    filter: brightness(1.1);
  }
`;

const SecondaryButton = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 15};
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 360px;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 35px rgba(133, 76, 230, 0.35);

  @media (max-width: 960px) {
    max-width: 260px;
    max-height: 260px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1200px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.45;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
    opacity: 0.3;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation} style={{ width: "100%" }}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  <Prefix>I build as a</Prefix>
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        delay: 45,
                        deleteSpeed: 25,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ButtonGroup>
                <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                  Check Resume ↗
                </ResumeButton>
                <SecondaryButton href="#Projects">
                  View Architecture & Code
                </SecondaryButton>
              </ButtonGroup>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt options={{ max: 20, scale: 1.03 }}>
                  <Img src={HeroImg} alt={Bio.name} />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
