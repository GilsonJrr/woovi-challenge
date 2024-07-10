import React, { FC } from "react";
import { Container } from "../../components/Containers/styles";
import * as Styled from "./styles";
import SecurityAlertFooter from "../../components/SecurityAlertFooter";
import Header from "../../components/Header";
import QRCode from "../../assets/images/qr_code.png";
import Button from "../../components/Button";
import CopyAndPaste from "../../assets/images/copy_and_paste.png";
import InstallmentList from "../../components/InstallmentList";
import { installmentType } from "../../types";

type PixCreditCardProps = {
  installments?: installmentType;
};

const PixCreditCard: FC<PixCreditCardProps> = ({ installments }) => {
  return (
    <Container>
      <Header
        greeting={
          <>
            João, pague a entrada <br /> de {installments?.value} pelo Pix
          </>
        }
      />
      <Styled.QRCodeContainer>
        <Styled.Image src={QRCode} alt="QR_Code" />
      </Styled.QRCodeContainer>
      <Button>
        <Styled.ButtonContent>
          Clique para copiar QR CODE{" "}
          <Styled.Image src={CopyAndPaste} alt="copy_and_paste" />
        </Styled.ButtonContent>
      </Button>
      <InstallmentList
        installments={
          installments || {
            id: 0,
            installment: 0,
            value: "",
            total: "",
            alert: "",
          }
        }
      />
      <SecurityAlertFooter />
    </Container>
  );
};

export default PixCreditCard;
