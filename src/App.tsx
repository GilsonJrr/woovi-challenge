import React, { useState } from "react";
import PaymentMethod from "./pages/PaymentMethod";
import PixCreditCard from "./pages/PixCreditCard";
import { installmentType } from "./types";
import PixCreditCardForm from "./pages/PixCreditCardForm";
import Button from "./components/Button";

function App() {
  const [selectedInstallments, setSelectedInstallments] =
    useState<installmentType>();

  const [page, setPage] = useState("PaymentMethod");

  const handleOnclick = (value: installmentType) => {
    setSelectedInstallments(value);
    setTimeout(() => {
      setPage(value.id === 100 ? "PixCreditCard" : "PixCreditCardForm");
    }, 500);
  };

  return (
    <>
      {page === "PaymentMethod" ? (
        <PaymentMethod
          onClick={(value: installmentType) => handleOnclick(value)}
        />
      ) : page === "PixCreditCard" ? (
        <PixCreditCard installments={selectedInstallments} />
      ) : page === "PixCreditCardForm" ? (
        <PixCreditCardForm installments={selectedInstallments} />
      ) : null}
      {/* to navigate between pages */}
      {page !== "PaymentMethod" && (
        <Button onClick={() => setPage("PaymentMethod")}>Voltar</Button>
      )}
    </>
  );
}

export default App;
