import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VisionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 5rem 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-j-sub);
  margin-bottom: 4rem;
`;

export const FlowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const FlowNode = styled(motion.div) <{ $isHighlight?: boolean }>`
  background-color: ${props => props.$isHighlight ? 'var(--color-j-accent)' : '#ffffff'};
  color: ${props => props.$isHighlight ? '#ffffff' : 'var(--color-j-text)'};
  border: 1px solid ${props => props.$isHighlight ? 'var(--color-j-accent)' : 'var(--color-j-border)'};
  border-radius: 0.5rem; /* Um pouco mais quadrado, a lembrar post-its */
  padding: 1.5rem;
  width: 12rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.75rem;
    opacity: ${props => props.$isHighlight ? '0.9' : '0.6'};
  }
`;

export const ArrowConnector = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-j-border);
  transform: rotate(90deg); 

  @media (min-width: 768px) {
    transform: rotate(0deg); 
  }
`;