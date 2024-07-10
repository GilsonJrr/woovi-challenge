import React, { FC, ReactNode } from "react";
import * as Styled from "./styles";
import logo from "../../assets/images/woovi_logo.png";

type HeaderProps = {
  greeting?: string | ReactNode | ReactNode[];
};

const Header: FC<HeaderProps> = ({ greeting }) => {
  return (
    <Styled.Container>
      <Styled.Icon src={logo} alt="security_shield" />
      <Styled.GreetingTitle>{greeting}</Styled.GreetingTitle>
    </Styled.Container>
  );
};

export default Header;
