import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 6px;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Span = styled.div`
  display: block;
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const VelocityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 14px 0 10px 0;
  background: rgba(133, 76, 230, 0.08);
  border: 1px solid rgba(133, 76, 230, 0.28);
  border-radius: 8px;
  padding: 10px 8px;
  text-align: center;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const MetricValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #7ee787;
`;

const MetricLabel = styled.div`
  font-size: 10.5px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 2px;
`;

const WorkProfileWrapper = styled.div`
  margin: 10px 0 14px 0;
  display: flex;
  align-items: center;
`;

const WorkProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  color: #c49eff;
  background: rgba(133, 76, 230, 0.14);
  border: 1px solid rgba(133, 76, 230, 0.35);
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.25);
    border-color: #854ce6;
    color: #ffffff;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            alt={experience?.company}
            style={{ width: "65%", height: "65%", objectFit: "contain" }}
            src={experience?.img}
          />
        </div>
      }
      iconStyle={{
        background: "#171721",
        boxShadow: "0 0 0 3px #854CE6, 0 4px 12px rgba(0, 0, 0, 0.5)",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(17, 25, 40, 0.88)",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.12) 0px 4px 24px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.2)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}

        {experience?.id === 0 && (
          <>
            <VelocityGrid>
              <div>
                <MetricValue>3,567+</MetricValue>
                <MetricLabel>Enterprise Commits</MetricLabel>
              </div>
              <div>
                <MetricValue>240 Days/Yr</MetricValue>
                <MetricLabel>Mon–Fri Cadence</MetricLabel>
              </div>
              <div>
                <MetricValue>26s ➔ 19s</MetricValue>
                <MetricLabel>Latency Slashed</MetricLabel>
              </div>
            </VelocityGrid>
            <WorkProfileWrapper>
              <WorkProfileLink
                href="https://github.com/ajithakdev-valor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>⚡</span> View Verified Production Cadence (@ajithakdev-valor) ↗
              </WorkProfileLink>
            </WorkProfileWrapper>
          </>
        )}

        {experience?.skills && (
          <Skills>
            <b>Skills</b>
            <ItemWrapper>
              {experience?.skills?.map((skill, index) => (
                <Skill key={index}>• {skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
