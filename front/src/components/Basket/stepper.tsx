import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetActiveStep, GetStepsContent } from "../../selectors";
import { goNext, goBack } from "../../slices/basketSlice";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Button } from "@material-ui/core";

const StepperComponent: FC = () => {
  const dispatch = useDispatch();

  const activeStep = useSelector(GetActiveStep);
  const steps = useSelector(GetStepsContent);

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 ? (
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => dispatch(goBack())}
          >
            Go Back
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default StepperComponent;
