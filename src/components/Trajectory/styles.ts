import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TrajectoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-j-sub);
  margin-bottom: 3rem;
`;

export const NodesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr); 
    gap: 1.25rem; 
    max-width: 1100px;
  }
`;

export const NodeCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  width: 100%;
  min-height: 160px; 
  background-color: #ffffff;
  border: 1px solid var(--color-j-border);
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-j-accent);
    transform: translateY(-5px);
  }

  .perspective-tooltip {
    position: absolute;
    top: 110%;
    width: 14rem;
    background-color: #ffffff;
    border: 1px solid var(--color-j-border);
    color: var(--color-j-text);
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(-10px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 20;

    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background-color: #ffffff;
      border-top: 1px solid var(--color-j-border);
      border-left: 1px solid var(--color-j-border);
    }
  }

  &:hover .perspective-tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    min-height: auto; 
    padding: 1.25rem;

    .perspective-tooltip {
      position: static; 
      opacity: 1;
      pointer-events: auto;
      transform: none;
      width: 100%;
      box-shadow: none;
      background: rgba(0,0,0,0.02); 
      margin-top: 1rem;
      border: none;
      border-top: 1px solid var(--color-j-border);
      padding: 0.75rem 0 0 0;
      
      &::before { display: none; } 
    }
  } 
`;

export const NodeTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600; 
  color: var(--color-j-text);
  margin-top: 0.75rem;
  text-align: center;
`;

export const NodeSubtitle = styled.p`
  font-size: 0.75rem;
  color: var(--color-j-sub);
  margin-top: 0.25rem;
  text-align: center;
`;