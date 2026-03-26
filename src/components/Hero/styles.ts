import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding: 5rem 1rem 4rem;
  border-bottom: 1px solid var(--color-j-border);
`;

export const ProfileImagePlaceholder = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: var(--color-j-border);
  border: 4px solid #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-j-sub);
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;

export const NameTitle = styled.h1`
 /* MOBILE: Aumentamos de 1.75rem para 2.25rem */
  font-size: 2.25rem; 
  font-weight: 300;
  color: var(--color-j-text);
  margin-top: 1.5rem;
  line-height: 1.2; /* Garante que se o nome quebrar em 2 linhas, não fique muito afastado */
  text-align: center;

  /* TABLET / DESKTOP */
  @media (min-width: 768px) {
    font-size: 3.5rem; /* Um pouco maior também no desktop para manter a proporção */
    margin-top: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-j-sub);
  margin-top: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  margin-top: 1.25rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-j-sub);
  max-width: 28rem;
  line-height: 1.6;
`;

export const ActionButton = styled(motion.button)`
  margin-top: 2.5rem;
  background-color: var(--color-j-action);
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #8D7363;
  }
`;