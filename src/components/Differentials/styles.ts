import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DifferentialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 1rem;
  background-color: #FAFAFA; 
  border-top: 1px solid var(--color-j-border);
  border-bottom: 1px solid var(--color-j-border);
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-j-sub);
  margin-bottom: 3rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DiffCard = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid var(--color-j-border);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-j-accent);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-j-bg);
  border-radius: 0.75rem;
  color: var(--color-j-accent);
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-j-text);
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-j-sub);
  line-height: 1.6;
`;