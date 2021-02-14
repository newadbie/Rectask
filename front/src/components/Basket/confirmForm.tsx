import { FC } from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import { GetPayData } from "../../selectors";

import classes from "./style.module.css";

const ConfirmForm: FC = () => {
  const payData = useSelector(GetPayData);
  return (
    <div>
      <header>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Confirm your data!
        </Typography>
      </header>
      <main>
        <Paper style={{ padding: "30px 0" }}>
          <Grid container>
            {Object.entries(payData).map((entry) => (
              <>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ fontWeight: "bold" }}
                    className={`${classes.Typography} ${classes.UpperFirstLetter}`}
                  >
                    {entry[0]}:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    className={`${classes.Typography}`}
                  >
                    {entry[1]}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
          <Button variant="contained" color="primary" className={classes.SubmitButton}>Everything is correct! Order</Button>
        </Paper>
      </main>
    </div>
  );
};

export default ConfirmForm;
