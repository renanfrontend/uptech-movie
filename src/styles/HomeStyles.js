import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #2F2E41;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
  padding: 20px 0;
  
  @media (max-width: 780px) {
    display: flex;
  }
`;

export const MovieCard = styled.div`
  margin: 10px;
  border-radius: 8px; 
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 768px) {
    width: 100%; 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

// MovieImage
export const MovieImage = styled.img`
  width: 50%; 
  height: 200px; 
  object-fit: cover; 
  border-radius: 8px 8px 0 0; 
`;



export const MovieInfo = styled.div`
  padding: 16px; 
  text-align: center;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

export const MoviePrice = styled.p`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ itemCount }) => (itemCount && itemCount > 0 ? '#039B00' : '#0056b3')};
  }

  .item-count {
    color: white;
    background-color: green;
    border-radius: 50%;
    padding: 4px 8px;
    font-size: 12px;
    min-width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  &[itemCount] { 
    background-color: #039B00;

    &:hover {
      background-color: #039B00;
    }
  }
`

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
`

export const EmptyMovieList = styled.div`
  width: 100%; 
  max-width: 400px; /* Limit the width on larger screens */
  margin: 20px auto; /* Center the container horizontally */
  padding: 20px;
  border-radius: 8px; 
  background-color: #fff; 
  display: flex;
  flex-direction: column; /* Arrange content vertically */
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%; /* Take up most of the screen on tablets */
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%; /* Full width on mobile */
  }

  img {
    display: block;
    margin: 0 auto 20px; /* Add margin below the image */
    max-width: 100%;
  }

  p {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  }
`;