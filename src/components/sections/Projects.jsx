import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 750px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  border-radius: 12px;
  font-weight: 500;
  margin: 24px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary + 25};
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 35};
    color: #FFFFFF;
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
  width: 100%;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Featured Projects & Engineering Work</Title>
        <Desc style={{ marginBottom: "32px" }}>
          Production systems built for healthcare SaaS, developer utilities shipped to production, and Linux systems programming.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "production"}
            onClick={() => setToggle("production")}
          >
            PRODUCTION SAAS
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "open source"}
            onClick={() => setToggle("open source")}
          >
            DEVELOPER TOOLS
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "systems"}
            onClick={() => setToggle("systems")}
          >
            SYSTEMS & LINUX
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
