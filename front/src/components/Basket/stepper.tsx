import React, { FC, useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Button } from "@material-ui/core";

interface Props {
  steps: Array<string>;
  currentStep: number;
  goNext: () => void;
  goBack: () => void;
}

const StepperComponent: FC<Props> = ({
  steps,
  currentStep,
  goNext,
  goBack,
}) => {
  if (currentStep > steps.length - 1) {
    throw Error("Incorrect step!");
  }
  return (
    <div>
      <Stepper activeStep={currentStep}>
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
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        {currentStep !== 0 ? (
          <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => goBack()}>
            Back
          </Button>
        ) : null}
        {currentStep !== steps.length - 1 ? (
          <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => goNext()}>
            Next
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default StepperComponent;
