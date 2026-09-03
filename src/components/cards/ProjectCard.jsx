import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 340px;
  min-height: 480px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary + 60};
    box-shadow: 0 10px 30px rgba(133, 76, 230, 0.25);
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 120px;
  background: radial-gradient(circle, rgba(133, 76, 230, 0.12) 0%, rgba(23, 23, 33, 0.8) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ProjectIcon = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.primary + 30};
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
`;

const Date = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 6px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

const ActionButton = styled.a`
  flex: 1;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme, primary }) => (primary ? "#FFFFFF" : theme.primary)};
  background-color: ${({ theme, primary }) => (primary ? theme.primary : "transparent")};
  border: 1px solid ${({ theme }) => theme.primary};
  &:hover {
    filter: brightness(1.15);
    transform: scale(1.02);
  }
`;

const ProjectCard = ({ project }) => {
  const hasLiveDemo = project.webapp && project.webapp !== project.github;

  return (
    <Card>
      <Top>
        <ImageContainer>
          <ProjectIcon src={project.image} alt={project.title} />
        </ImageContainer>
        <Tags>
          {project.tags?.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </Tags>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
      </Top>

      <ActionContainer>
        <ActionButton href={project.github} target="_blank" rel="noopener noreferrer">
          {project.category === "production" ? "Architecture" : "Source Code"}
        </ActionButton>
        {hasLiveDemo && (
          <ActionButton href={project.webapp} target="_blank" rel="noopener noreferrer" primary="true">
            Live App ↗
          </ActionButton>
        )}
      </ActionContainer>
    </Card>
  );
};

export default ProjectCard;
