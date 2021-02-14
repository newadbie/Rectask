import { FC } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import { GetPayData, GetProducts } from "../../selectors";

import classes from "./style.module.css";

const ConfirmForm: FC = () => {
  const payData = useSelector(GetPayData);
  const products = useSelector(GetProducts);

  const submit = () => {
    const order = {
      order: products.map((product) => ({
        id: product.id,
        quantity: product.qty,
      })),
      first_name: payData.name,
      last_name: payData.surname,
      city: payData.address,
      zip_code: payData.zip_code,
    };
  };

  return (
    <div>
      <header>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Confirm your data!
        </Typography>
      </header>
      <main style={{ padding: "30px 0" }}>
        <Grid container>
          {Object.entries(payData).map((entry) => (
            <div key={entry[0]} style={{display:'flex',width:'100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Grid item xs={6} >
                <Typography
                  variant="body1"
                  align="right"
                  style={{ fontWeight: "bold" }}
                  className={`${classes.Typography} ${classes.UpperFirstLetter}`}
                >
                  {entry[0]}:
                </Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="body1" className={`${classes.Typography}`}>
                  {entry[1]}
                </Typography>
              </Grid>
            </div>
          ))}
        </Grid>
        <div style={{width:'100%'}} >
          <Button
            variant="contained"
            color="primary"
            className={classes.SubmitButton}
            onClick={() => submit()}
          >
            Everything is correct! Order
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ConfirmForm;
