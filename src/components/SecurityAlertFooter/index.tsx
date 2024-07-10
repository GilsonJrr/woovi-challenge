import React from "react";
import * as Styled from "./styles";
import BlackAndWhiteLogo from "../../assets/images/black_and_white_logo.png";
import SecurityShield from "../../assets/images/security_shield.png";

const SecurityAlertFooter = () => {
  return (
    <Styled.Container>
      <Styled.Icon src={SecurityShield} alt="security_shield" />
      <Styled.Title>Pagamento 100% seguro via:</Styled.Title>
      <Styled.Icon src={BlackAndWhiteLogo} alt="black_and_white_logo" />
    </Styled.Container>
  );
};

export default SecurityAlertFooter;
