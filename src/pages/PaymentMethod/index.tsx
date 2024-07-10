import React, { FC, useState } from "react";
import { Container } from "../../components/Containers/styles";
import MethodCard from "../../components/MethodCard";
import * as Styled from "./styles";
import SecurityAlertFooter from "../../components/SecurityAlertFooter";
import Header from "../../components/Header";
import { installmentType } from "../../types";
import { Installments } from "../../data";
import Loading from "../../components/Loading";

type PaymentMethodProps = {
  onClick: (value: installmentType) => void;
};

const PaymentMethod: FC<PaymentMethodProps> = ({ onClick }) => {
  const [selected, setSelected] = useState<installmentType>();
  const [showLoading, setShowLoading] = useState(false);

  const handleOnclick = (value: installmentType) => {
    setShowLoading(true);
    setSelected(value);
    onClick(value);
  };

  if (showLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header greeting="João, como você quer pagar?" />
      <MethodCard
        tag="Pix"
        onClick={() =>
          handleOnclick({
            id: 100,
            installment: 1,
            value: "R$ 30.500,00",
            total: "R$ 30.500,00",
            alert: "",
          })
        }
        selected={selected?.id === 100}
        multiple={false}
        margin="0 0 40px 0"
      >
        <Styled.InstallmentContainer>
          <Styled.Installments>1x</Styled.Installments>
          <Styled.Value>R$ 30.500,00</Styled.Value>
        </Styled.InstallmentContainer>
        <Styled.Alert>Ganhe 3% de Cashback</Styled.Alert>
        <Styled.AlertTag>
          🤑 R$ 300,00 de volta no seu Pix na hora
        </Styled.AlertTag>
      </MethodCard>
      {Installments.map((installment) => {
        const lastId = Installments[Installments.length - 1].id;

        return (
          <MethodCard
            tag={installment.id === 1 ? "Pix Parcelado" : ""}
            onClick={() => handleOnclick(installment)}
            selected={selected?.id === installment.id}
            radius={
              installment.id === 1
                ? "10px 10px 0 0"
                : installment.id === lastId
                ? " 0 0 10px 10px"
                : "0px"
            }
            multiple
          >
            <Styled.InstallmentContainer>
              <Styled.Installments>
                {installment.installment}x
              </Styled.Installments>
              <Styled.Value>{installment.value}</Styled.Value>
            </Styled.InstallmentContainer>
            <Styled.Total>Total: {installment.total}</Styled.Total>
            {installment.alert && (
              <Styled.AlertTag>{installment.alert}</Styled.AlertTag>
            )}
          </MethodCard>
        );
      })}
      <SecurityAlertFooter />
    </Container>
  );
};

export default PaymentMethod;
