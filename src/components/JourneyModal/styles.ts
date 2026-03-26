import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

export const ModalContent = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  background: var(--color-j-bg);
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-j-accent);
  display: flex;
  flex-direction: column;
`;

export const Canvas = styled.div`
  flex: 1;
  overflow: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { background: var(--color-j-border); border-radius: 4px; }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: white;
  border: 1px solid var(--color-j-border);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-j-accent);
  transition: all 0.2s;

  &:hover { transform: scale(1.1); background: var(--color-j-accent); color: white; }
`;

export const ConnectionLine = styled.div`
  width: 2px;
  height: 4rem;
  background: var(--color-j-accent);
  margin: 0 auto;
  opacity: 0.5;
`;