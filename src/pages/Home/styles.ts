import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem; 

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const MainCard = styled.main`
  width: 100%;
  max-width: 1000px;
  background-color: rgba(255, 255, 255, 0.9); 
  backdrop-filter: blur(10px); 
  
  border: 1px solid var(--color-j-border);
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 
              0 10px 10px -5px rgba(0, 0, 0, 0.02);
  
  overflow: hidden; 
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    border-radius: 2rem;
  }
  
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;