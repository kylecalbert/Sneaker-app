import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  /* background-color: red; */
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
  margin-left: 2rem;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 50%;
  display: flex;
  /* background-color: red; */
`;

export const ProductInfoContainer = styled.div`
  /* background-color: green; */
  width: 70%;
`;

export const Heading1Container = styled.div`
  margin-bottom: 1rem;
`;

export const HeadlineContainer = styled.div`
  margin-bottom: 2rem;
  /* max-width: 50%; */
`;

export const BodyContainer = styled.div`
  /* background-color: blue; */
  /* max-width: 55%; */
`;

export const PriceContainer = styled.div`
  display: flex;

  margin-top: 2rem;
  /* background-color: red; */
  align-items: center;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* background-color: blue; */
  justify-content: flex-start;

  display: flex;
  width: 100%;
  margin-top: 2rem;
`;
