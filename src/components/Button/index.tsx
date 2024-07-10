import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import * as Styled from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode | ReactNode[];
  width?: string;
};

const Button: FC<ButtonProps> = ({ children, width, ...rest }) => {
  return (
    <Styled.Container {...rest} width={width}>
      {children}
    </Styled.Container>
  );
};

export default Button;
