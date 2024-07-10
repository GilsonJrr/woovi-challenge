import styled from "styled-components";

type Props = {
  active?: boolean;
};

export const DueDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

export const DueDateTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #4d4d4d;
`;

export const DueDate = styled.h2`
  font-size: 16px;
  font-weight: 800;
  color: #4d4d4d;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InstallmentsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  gap: 10px;
  margin: 0 10px;
  padding: 0 0 0 15px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 60%;
    background-color: #e5e5e5;
    left: 0;
  }
`;

export const InstallmentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const Marker = styled.div<Props>`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: #ffffff;
  border: solid 3px ${({ active }) => (active ? "#03d69d" : "#E5E5E5")};
  position: absolute;
  left: -22px;
  z-index: 1000;
`;

export const InstallmentNumberContainer = styled.div``;

export const InstallNumber = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
`;

export const InstallmentValue = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: #4d4d4d;
`;

export const CETContainer = styled.div`
  width: 100%;
  border-top: solid 2px #e5e5e5;
  border-bottom: solid 2px #e5e5e5;
  padding: 20px 0;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CET = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #4d4d4d;
`;

export const CETTotal = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
`;

export const HowItWork = styled.div`
  border-bottom: solid 2px #e5e5e5;
  width: 100%;
  padding: 20px 6px 20px 0;
  font-weight: 800;
  font-size: 16px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChevronUp = styled.img``;
