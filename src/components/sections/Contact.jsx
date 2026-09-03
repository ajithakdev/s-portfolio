import React, { useState } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { GitHub, LinkedIn, Twitter, ContentCopy, CheckCircle, SendRounded } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 40px;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 950px;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 650px;
  line-height: 1.5;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TerminalCard = styled.div`
  width: 100%;
  background: #0d1117;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  background: #161b22;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const TerminalTitle = styled.div`
  font-family: monospace;
  font-size: 13px;
  color: #8b949e;
`;

const TerminalBody = styled.div`
  padding: 24px 28px;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 14px;
  color: #e6edf3;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 12px;
  }
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #58a6ff;
  margin-bottom: 12px;
`;

const PromptSymbol = styled.span`
  color: #3fb950;
`;

const JsonBlock = styled.pre`
  background: rgba(0, 0, 0, 0.25);
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #7ee787;
  overflow-x: auto;
  margin: 10px 0 20px 0;
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 10px;
`;

const ActionCard = styled.a`
  text-decoration: none;
  background: #161b22;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: #854ce6;
    background: #1c2128;
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.25);
  }
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ bg }) => bg || "rgba(133, 76, 230, 0.15)"};
  color: ${({ color }) => color || "#854ce6"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #f0f6fc;
`;

const CardSub = styled.span`
  font-size: 12px;
  color: #8b949e;
`;

const CopyButton = styled.button`
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(Bio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Let's Connect & Build</Title>
        <Desc>
          Whether you have an open backend / systems engineering role, a distributed systems challenge, or want to discuss architecture—I'd love to talk.
        </Desc>

        <TerminalCard>
          <TerminalHeader>
            <TerminalDots>
              <Dot color="#ff5f56" />
              <Dot color="#ffbd2e" />
              <Dot color="#27c93f" />
            </TerminalDots>
            <TerminalTitle>ajithakdev@production:~ (zsh)</TerminalTitle>
            <div style={{ width: 40 }} />
          </TerminalHeader>

          <TerminalBody>
            <CommandLine>
              <PromptSymbol>➜</PromptSymbol> curl -s https://ajithakdev.info/telemetry
            </CommandLine>
            <JsonBlock>
{`{
  "engineer": "${Bio.name}",
  "status": "Open to Backend & Distributed Systems Engineering Roles",
  "experience": "2+ Years (Production Healthcare SaaS)",
  "specialization": ["Node.js", "TypeScript", "Amazon DocumentDB", "AWS S3/SQS"],
  "location": "Bengaluru, Karnataka, India",
  "timezone": "IST (UTC+5:30)",
  "primary_email": "${Bio.email}"
}`}
            </JsonBlock>

            <ActionGrid>
              <ActionCard
                as="div"
                onClick={handleCopyEmail}
                title="Click to copy email address"
              >
                <CopyButton>
                  <IconWrapper bg="rgba(16, 185, 129, 0.15)" color="#10B981">
                    {copied ? <CheckCircle fontSize="small" /> : <ContentCopy fontSize="small" />}
                  </IconWrapper>
                  <CardText style={{ marginLeft: 14 }}>
                    <CardTitle>{copied ? "✓ Copied to Clipboard!" : "Copy Email"}</CardTitle>
                    <CardSub>{Bio.email}</CardSub>
                  </CardText>
                </CopyButton>
              </ActionCard>

              <ActionCard
                href={`mailto:${Bio.email}?subject=Opportunity%20Discussion%20-%20Backend%20Engineer`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper bg="rgba(99, 102, 241, 0.15)" color="#6366F1">
                  <SendRounded fontSize="small" />
                </IconWrapper>
                <CardText>
                  <CardTitle>Send an Email</CardTitle>
                  <CardSub>Opens your default mail app</CardSub>
                </CardText>
              </ActionCard>

              <ActionCard href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                <IconWrapper bg="rgba(14, 165, 233, 0.15)" color="#0EA5E9">
                  <LinkedIn fontSize="small" />
                </IconWrapper>
                <CardText>
                  <CardTitle>LinkedIn</CardTitle>
                  <CardSub>linkedin.com/in/ajithakdev</CardSub>
                </CardText>
              </ActionCard>

              <ActionCard href={Bio.github} target="_blank" rel="noopener noreferrer">
                <IconWrapper bg="rgba(255, 255, 255, 0.1)" color="#F0F6FC">
                  <GitHub fontSize="small" />
                </IconWrapper>
                <CardText>
                  <CardTitle>GitHub</CardTitle>
                  <CardSub>github.com/ajithakdev</CardSub>
                </CardText>
              </ActionCard>

              <ActionCard href={Bio.twitter} target="_blank" rel="noopener noreferrer">
                <IconWrapper bg="rgba(29, 155, 240, 0.15)" color="#1D9BF0">
                  <Twitter fontSize="small" />
                </IconWrapper>
                <CardText>
                  <CardTitle>Twitter / X</CardTitle>
                  <CardSub>@ajithakdev</CardSub>
                </CardText>
              </ActionCard>
            </ActionGrid>
          </TerminalBody>
        </TerminalCard>
      </Wrapper>
    </Container>
  );
};

export default Contact;
