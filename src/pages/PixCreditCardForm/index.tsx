import React, { FC, useState } from "react";
import { Container } from "../../components/Containers/styles";
import * as Styled from "./styles";
import SecurityAlertFooter from "../../components/SecurityAlertFooter";
import Header from "../../components/Header";
import Button from "../../components/Button";
import InstallmentList from "../../components/InstallmentList";
import { installmentType } from "../../types";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Installments } from "../../data";

type PixCreditCardProps = {
  installments?: installmentType;
  onClick?: () => void;
};

const PixCreditCardForm: FC<PixCreditCardProps> = ({
  installments,
  onClick,
}) => {
  const [installmentValue, setInstallmentValue] = useState(
    String(installments?.id)
  );

  const [form, setForm] = useState({
    name: "João Linaldo Dias Fraga Santos",
    CPF: "405.503.503-15",
    cardNumber: "4539 1488 0343 6467",
    dueDate: "10/11",
    cvv: "405",
  });

  const handleChange = (event: SelectChangeEvent) => {
    setInstallmentValue(event.target.value as string);
  };

  const updateFormValue = (label: string, newValue: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [label]: newValue,
    }));
  };

  return (
    <Container>
      <Header
        greeting={`João, pague o restante em ${
          Installments[Number(installmentValue) - 1].installment
        }x no cartão`}
      />
      <Styled.FormContainer>
        <TextField
          id="name"
          label="Nome completo"
          variant="outlined"
          value={form.name}
          onChange={(e) => updateFormValue("name", e.target.value)}
        />
        <TextField
          id="CPF"
          label="CPF"
          variant="outlined"
          value={form.CPF}
          onChange={(e) => updateFormValue("CPF", e.target.value)}
        />
        <TextField
          id="cardNumber"
          label="Número do cartão"
          variant="outlined"
          value={form.cardNumber}
          onChange={(e) => updateFormValue("cardNumber", e.target.value)}
        />
        <Styled.SameLineForm>
          <TextField
            id="dueDate"
            label="Vencimento"
            variant="outlined"
            value={form.dueDate}
            onChange={(e) => updateFormValue("dueDate", e.target.value)}
          />
          <TextField
            id="cvv"
            label="CVV"
            variant="outlined"
            value={form.cvv}
            onChange={(e) => updateFormValue("cvv", e.target.value)}
          />
        </Styled.SameLineForm>
        <FormControl fullWidth>
          <InputLabel id="installments">Parcelas</InputLabel>
          <Select
            labelId="installments"
            id="installments"
            value={installmentValue}
            label="Parcelas"
            onChange={handleChange}
          >
            {Installments.map((_installment) => {
              return (
                <MenuItem
                  value={_installment.id}
                >{`${_installment.installment}x de ${_installment.value}`}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Styled.FormContainer>
      <Button onClick={onClick} width={"100%"}>
        Pagar
      </Button>
      <InstallmentList
        installments={Installments[Number(installmentValue) - 1]}
      />
      <SecurityAlertFooter />
    </Container>
  );
};

export default PixCreditCardForm;
