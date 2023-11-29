import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  background-color: red;
  width: 100%;
  display: flex;

  height: 100%;
`;

export const LeftContainer = styled.div`
  background-color: purple;
  width: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 50%;
  display: flex;
`;

export const Heading1Container = styled.div`
  margin-bottom: 1rem;
`;

export const HeadlineContainer = styled.div`
  margin-bottom: 2rem;
  max-width: 50%;
`;

export const BodyContainer = styled.div`
  /* background-color: blue; */
  max-width: 55%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
