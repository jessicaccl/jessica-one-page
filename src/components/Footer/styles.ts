import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid var(--color-j-border);
  background-color: var(--color-j-bg);
  padding: 4rem 1rem 2rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const FooterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-j-text);
  margin-bottom: 0.5rem;
`;

export const FooterSubtitle = styled.p`
  font-size: 0.875rem;
  color: var(--color-j-sub);
  margin-bottom: 2rem;
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const SocialIcon = styled.a`
  color: var(--color-j-sub);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: transparent;

  &:hover {
    color: var(--color-j-accent);
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.div`
  font-size: 0.75rem;
  color: var(--color-j-sub);
  opacity: 0.7;
`;