import React, { FC, useState } from "react";

import { useSelector } from "react-redux";
import { GetProducts } from "../selectors";

import BasketGrid from "../components/Basket/basketGrid";
import { Container, Typography } from "@material-ui/core";
import Stepper from "../components/Basket/stepper";

const Basket: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [steps, setSteps] = useState<Array<string>>([
    "Check your order",
    "Set your address",
    "Finalize your order",
  ]);

  const products = useSelector(GetProducts);

  const goNextHandler = () => {
    if (activeStep + 1 < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const goBackHandler = () => {
    if (activeStep - 1 < steps.length - 1) {
      setActiveStep(activeStep - 1);
    }
  };

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
        {products.length === 0 ? (
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Basket is empty
          </Typography>
        ) : (
          <>
            {activeStep === 0 ? <BasketGrid products={products} /> : null}
            <Stepper
              currentStep={activeStep}
              steps={steps}
              goNext={goNextHandler}
              goBack={goBackHandler}
            />
          </>
        )}
      </main>
    </Container>
  );
};

export default Basket;
