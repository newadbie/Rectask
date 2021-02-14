import { FC } from "react";

import { Grid, Typography } from "@material-ui/core";
import GridItem from "./gridItem";

import { ProductProps } from "../../types";

import classes from "./style.module.css";

interface Props {
  products: Array<ProductProps>;
}

const BasketGrid: FC<Props> = ({ products }) => {
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
    <div>
      <>
        {gridHeader}
        {products.map((product) => (
          <GridItem {...product} />
        ))}
        <Grid container style={{padding: '10px'}}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Typography variant="h3">Summary: </Typography>
          </Grid>
          <Grid item xs={8} style={{ textAlign: "center" }}>
            <Typography variant="h3">
              {totalPrice / 100}{" "}
              {products[0].currency}
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default BasketGrid;
