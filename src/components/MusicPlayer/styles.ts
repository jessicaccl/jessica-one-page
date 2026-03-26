import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PlayerButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid var(--color-j-border);
  color: var(--color-j-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-j-accent);
  }
`;