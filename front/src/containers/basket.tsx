import React, { FC } from "react";

import { useSelector } from "react-redux";
import { GetActiveStep, GetProducts, IsFinalized } from "../selectors";

import { Container, Fade, Typography, Slide } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <Fade
              in={activeStep === 0}
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <div className="BasketPage">
                <BasketGrid products={products} />
              </div>
            </Fade>
            <Fade
              in={activeStep === 1}
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <div className="BasketPage">
                <BasketForm />
              </div>
            </Fade>
            <Fade
              in={activeStep === 2}
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <div className="BasketPage">
                <ConfirmForm />
              </div>
            </Fade>
            <Fade
              in={activeStep === 3}
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <div className="BasketPage">
                <FinalPage />
              </div>
            </Fade>
            <Stepper />
            </>
        )}
      </main>
    </Container>
  );
};

export default Basket;
