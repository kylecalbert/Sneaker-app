import styled from 'styled-components';
import { colors, sizes } from '../common/constants/constants';
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryOrange};
  padding: 10px 15px;
  color: ${colors.white};
  font-size: ${sizes.small};
  border: none;
  border-radius: 0.5rem;
  margin-left: 3%;
  cursor: pointer;
  width: 60%;

  height: 3.7rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.paleOrange};
    color: black;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;
