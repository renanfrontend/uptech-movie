import React from 'react';
import styled from 'styled-components';
import loadSpinner from '../images/load-spinner.png';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Ajuste conforme necessário
  text-align: center;
`;

const SpinnerImage = styled.img`
  width: 60px; // Adjust the size as needed
  height: 60px; 
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src={loadSpinner} alt="Loading..." />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;