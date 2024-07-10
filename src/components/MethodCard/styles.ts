import styled from "styled-components";

type Props = {
  radius?: string;
  selected?: boolean;
  multiple?: boolean;
  margin?: string;
};

export const Card = styled.div<Props>`
  margin: ${({ margin }) => margin};
  border: solid 2px ${({ selected }) => (selected ? "#03D69D" : "#e5e5e5")};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  width: 100%;
  position: relative;
  padding: 25px 19px;
`;

export const TitleTag = styled.div`
  background-color: #e5e5e5;
  border-radius: 100px;
  position: absolute;
  top: -18px;
  padding: 5px 19px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 800px;
`;

export const CheckTag = styled.div<Props>`
  border: solid 2px ${({ selected }) => (selected ? "#03D69D" : "#e5e5e5")};
  width: 26px;
  height: 26px;
  border-radius: 100%;
  position: absolute;
  right: 19px;
  background-color: ${({ selected }) => (selected ? "#03D69D" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled.img``;
