import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 13px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ajith Kumar K</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer" title="Twitter / X">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.bluesky} target="_blank" rel="noopener noreferrer" title="Bluesky">
            <svg width="22" height="22" viewBox="0 0 568 501" fill="currentColor">
              <path d="M123.121 33.664C188.241 82.552 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.758-2.678 568-23.774 568 70.627c0 18.878-10.82 158.74-17.18 181.657-22.08 79.58-102.58 99.886-174.1 87.71 124.78 21.24 156.9 91.24 88.08 162.06-130.68 134.86-180.8-135.25-180.8-135.25s-50.12 270.11-180.8 135.25c-68.82-70.82-36.7-140.82 88.08-162.06-71.52 12.176-152.02-8.13-174.1-87.71C10.82 229.367 0 89.505 0 70.627 0-23.774 76.242-2.678 123.121 33.664Z"/>
            </svg>
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.instagram_work} target="_blank" rel="noopener noreferrer" title="Instagram (Work)">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; {new Date().getFullYear()} Ajith Kumar Karudasevai (ajithakdev). All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
