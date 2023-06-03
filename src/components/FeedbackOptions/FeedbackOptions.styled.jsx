import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 10px;
`;

export const Btn = styled.button`
  background-color: rgb(84, 84, 253);
  color: #fff;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border-color: rgb(84, 84, 253);
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :active {
    background-color: rgb(233, 184, 25);
    color: rgb(84, 84, 253);
    scale: 1.2;
  }
`;
