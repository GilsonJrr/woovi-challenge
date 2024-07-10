import styled from "styled-components";

export const InstallmentContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Installments = styled.h2`
  font-weight: 800;
  color: #4d4d4d;
`;

export const Value = styled.h2`
  font-weight: 600;
  color: #4d4d4d;
`;

export const Total = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #afafaf;
`;

export const Alert = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #03d69d;
`;

export const AlertTag = styled.div`
  background-color: #133a6f;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 10px 6px;
  border-radius: 6px 4px 4px 6px;
  margin-top: 10px;
  position: relative;
  height: 34px;

  &::after {
    content: "";
    position: absolute;
    right: -1px;
    top: 0;
    border-top: solid 17px transparent;
    border-bottom: solid 17px transparent;
    border-left: solid 17px transparent;
    border-right: solid 17px #ffffff;
  }
`;
