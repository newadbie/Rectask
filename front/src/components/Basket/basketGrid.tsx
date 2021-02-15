import React, { FC } from "react";

import { Button, Grid, Typography } from "@material-ui/core";
import GridItem from "./gridItem";

import { useDispatch } from "react-redux";
import { goNext } from "../../slices/basketSlice";

import { ProductProps } from "../../types";
import classes from "./style.module.css";

interface Props {
  products: Array<ProductProps>;
}

const BasketGrid: FC<Props> = ({ products }) => {
  const dispatch = useDispatch();

  const totalPrice = products
    .map((product) => product.price * product.qty)
    .reduce((prev, next) => prev + next);
  const gridHeader = (
    <Grid container>
      <Grid item xs={4} className={classes.CenteredItem}>
        <p>Photo</p>
      </Grid>
      <Grid item xs={4} className={classes.CenteredItem}>
        <p>Title</p>
      </Grid>
      <Grid item xs={2} className={classes.CenteredItem}>
        Price
      </Grid>
      <Grid item xs={1} className={classes.CenteredItem}>
        Quantity
      </Grid>
      <Grid item xs={1} className={classes.CenteredItem}>
        -
      </Grid>
    </Grid>
  );

  return (
    <div style={{position: 'relative', width: '100%'}}>
      <>
        {gridHeader}
        {products.map((product) => (
          <GridItem key={product.id} {...product} />
        ))}
        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Typography variant="h3">Summary: </Typography>
          </Grid>
          <Grid item xs={8} style={{ textAlign: "center" }}>
            <Typography variant="h3">
              {totalPrice / 100} {products[0].currency}
            </Typography>
          </Grid>
        </Grid>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => dispatch(goNext())}
          >
            Next
          </Button>
        </div>
      </>
    </div>
  );
};

export default BasketGrid;
