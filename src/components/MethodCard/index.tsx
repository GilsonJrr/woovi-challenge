import React, { FC, ReactNode } from "react";
import * as Styled from "./styles";
import check from "../../assets/images/check.png";

type MethodCardProps = {
  tag?: string;
  onClick: () => void;
  children: ReactNode | ReactNode[];
  radius?: string;
  selected?: boolean;
  multiple?: boolean;
  margin?: string;
};

const MethodCard: FC<MethodCardProps> = ({
  tag,
  onClick,
  children,
  radius,
  selected,
  multiple,
  margin,
}) => {
  return (
    <Styled.Card
      onClick={onClick}
      radius={radius}
      selected={selected}
      multiple={multiple}
      margin={margin}
    >
      {tag && (
        <Styled.TitleTag>
          <Styled.Title>{tag}</Styled.Title>
        </Styled.TitleTag>
      )}
      <Styled.CheckTag selected={selected}>
        <Styled.CheckIcon src={check} alt="checkIcon" />
      </Styled.CheckTag>
      {children}
    </Styled.Card>
  );
};

export default MethodCard;
