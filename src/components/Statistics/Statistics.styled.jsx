import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StatItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: rgb(84, 84, 253);
  pointer-events: none;
`;

export const Text = styled.span`
  color: rgb(0, 0, 0);
`;
