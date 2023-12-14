import styled from 'styled-components';
import { colors } from '../common/constants/constants';
export const IncrementorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightGrayishBlue};
  width: 40%;
  border: none;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    height: 4rem;
    width: 22rem;
  }
  @media (max-width: 667px) {
    height: 3rem;
    width: 14rem;
    margin-top: 1rem;
    margin-left: 0;
  }
`;

export const Button = styled.button`
  height: 30px;
  color: ${colors.primaryOrange};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${colors.lightGrayishBlue};
  &:first-child {
    margin-left: 1rem;
  }

  &:last-child {
    margin-right: 1rem;
  }
`;

export const Value = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
