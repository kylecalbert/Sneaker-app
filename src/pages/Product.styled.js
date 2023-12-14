import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;

  height: 100%;
  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: purple;
  width: 50%;
  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 512px) {
    width: 100%;
    height: 30%;
  }
  background-color: green;

  background-color: green;
`;

export const RightContainer = styled.div`
  display: flex;
  /* align-items: center; */
  margin-left: 2rem;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 50%;
  display: flex;

  @media (max-width: 512px) {
    width: 90%;
    margin-left: 0;
    height: 60%;
    margin-top: 5rem;
  }
  background-color: blue;
`;

export const ProductInfoContainer = styled.div`
  background-color: yellow;
  width: 70%;
  @media (max-width: 968px) {
    width: 100%;
  }
  @media (max-width: 512px) {
    margin-left: 0.9rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const Heading1Container = styled.div`
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 0.2rem;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const HeadlineContainer = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    margin-bottom: 0.2rem;
  }
`;

export const BodyContainer = styled.div`
  /* background-color: green; */
  /* max-width: 55%; */
`;

export const PriceContainer = styled.div`
  display: flex;

  margin-top: 2rem;
  /* background-color: red; */
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 0.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  background-color: purple;
  justify-content: flex-start;

  display: flex;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 915px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
