import { FC } from "react";

import { useSelector } from "react-redux";
import { GetProducts } from "../../selectors";

import { Grid } from "@material-ui/core";
import GridItem from "./gridItem";

import classes from './style.module.css';

const BasketGrid: FC = () => {
  const products = useSelector(GetProducts);

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
    <>
      {gridHeader}
      {products.map((product) => (
        <GridItem {...product} />
      ))}
    </>
  );
};

export default BasketGrid;
