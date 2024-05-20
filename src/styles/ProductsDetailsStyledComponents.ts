import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DetailsHeader = styled.header`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #3278a4;
  border: 5px solid black;
  border-radius: 0 0 30px 0;
  padding: 0.5rem 4rem;

  @media (max-width: 800px) {
    flex: 1 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    padding: 0;
  }
`;

export const BackBtn = styled.button`
  border: 3px solid black;
  border-radius: 30px;
  background-color: #726b8c;
`;

export const DetailsSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: 955px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 15px solid #3278a4;
  border-block: 1rem double #726b8c;
  border-radius: 15px;
  margin: 2rem 0 0 2rem;
  padding: 1rem;

  @media (max-width: 500px) {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
  }
`;

export const DetailsDescription = styled.h4`
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 36px;

  @media (max-width: 520px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const DescriptionText = styled.p`
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  margin: 0 1rem;

  @media (max-width: 510px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const DetailsImg = styled.img`
  width: 500px;
  height: 500px;
  margin-top: 2rem;
`;
