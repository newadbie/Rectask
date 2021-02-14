import React, { FC } from "react";

import { useSelector } from "react-redux";
import { GetActiveStep, GetProducts, IsFinalized } from "../selectors";

import { Container, Typography } from "@material-ui/core";

import BasketForm from "../components/Basket/form";
import ConfirmForm from "../components/Basket/confirmForm";
import BasketGrid from "../components/Basket/basketGrid";
import FinalPage from "../components/Basket/finalPage";
import Stepper from "../components/Basket/stepper";

const Basket: FC = () => {
  const products = useSelector(GetProducts);
  const activeStep = useSelector(GetActiveStep);
  const isFinalized = useSelector(IsFinalized);

  return (
    <Container>
      <header>
        <Typography
          variant="h2"
          style={{ textAlign: "center", padding: "20px 0" }}
        >
          Basket
        </Typography>
      </header>
      <main>
        {!(isFinalized && activeStep === 3) && products.length === 0 ? (
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Basket is empty
          </Typography>
        ) : (
          <>
            {activeStep === 0 ? <BasketGrid products={products} /> : null}
            {activeStep === 1 ? <BasketForm /> : null}
            {activeStep === 2 ? <ConfirmForm /> : null}
            {activeStep === 3 ? <FinalPage /> : null}
            <Stepper />
          </>
        )}
      </main>
    </Container>
  );
};

export default Basket;
