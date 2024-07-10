import React, { FC } from "react";
import * as Styled from "./styles";
import ChevronUp from "../../assets/images/chefron_up.png";
import { installmentType } from "../../types";

type InstallmentListProps = {
  installments: installmentType;
};

const InstallmentList: FC<InstallmentListProps> = ({ installments }) => {
  const { installment, value, total } = installments;

  const installmentsArray = Array.from({ length: installment }, (_, index) => ({
    id: index + 1,
    value: value,
  }));

  return (
    <Styled.Container>
      <Styled.DueDateContainer>
        <Styled.DueDateTitle>Prazo de pagamento:</Styled.DueDateTitle>
        <Styled.DueDate>15/12/2021 - 08:17</Styled.DueDate>
      </Styled.DueDateContainer>
      <Styled.InstallmentsList>
        {installmentsArray.map((_installment) => {
          return (
            <Styled.InstallmentsContainer key={_installment.id}>
              <Styled.Marker active={_installment.id === 1} />
              <Styled.InstallmentNumberContainer>
                <Styled.InstallNumber>
                  {_installment.id}ª{"  "}
                  {_installment.id === 1 ? "entrada no Pix" : "no cartão"}
                </Styled.InstallNumber>
              </Styled.InstallmentNumberContainer>
              <Styled.InstallmentValue>
                {_installment.value}
              </Styled.InstallmentValue>
            </Styled.InstallmentsContainer>
          );
        })}
      </Styled.InstallmentsList>
      <Styled.CETContainer>
        <Styled.CET>CET: 0,5%</Styled.CET>
        <Styled.CETTotal>Total: {total}</Styled.CETTotal>
      </Styled.CETContainer>
      <Styled.HowItWork>
        Como funciona? <Styled.ChevronUp src={ChevronUp} alt="Chevron_up" />
      </Styled.HowItWork>
      <Styled.DueDateContainer>
        <Styled.DueDateTitle>Identificador:</Styled.DueDateTitle>
        <Styled.DueDate>2c1b951f356c4680b13ba1c9fc889c47</Styled.DueDate>
      </Styled.DueDateContainer>
    </Styled.Container>
  );
};

export default InstallmentList;
