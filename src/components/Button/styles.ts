import styled from "styled-components";

type Props = {
  width?: string;
};

export const Container = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #133a6f;
  color: #ffffff;
  padding: 8px 30px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: ${({ width }) => width};
`;
