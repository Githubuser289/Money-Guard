import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const AddButton = styled.button`
  position: fixed;
  display: flex;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  color: rgba(251, 251, 251, 1);
  cursor: pointer;

  @media screen and (max-width: 767px) {
    bottom: 10px;
    right: 137.5px;
  }
`;
export const AddIcon = styled(AiOutlinePlus)`
  width: 25px;
  height: 25px;
`;
