import React, { FC } from "react";

import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

import { ProductProps } from "../../types";

import { Grid, IconButton } from "@material-ui/core";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Paper } from "@material-ui/core";

import classes from './style.module.css';

const GridItem: FC<ProductProps> = ({
  id,
  title,
  price,
  cover_url,
  currency,
  qty,
}) => {
  const dispatch = useDispatch();
  return (
    <Paper style={{ height: "300px", overflow: "hidden", padding: "10px", margin: '10px' }}>
      <Grid container style={{height: '100%', overflow: 'hidden'}}>
        <Grid item xs={4}>
          <img src={cover_url} />
        </Grid>
        <Grid item xs={4} className={classes.CenteredItem}>
          <p>{title}</p>
        </Grid>
        <Grid item xs={2} className={classes.CenteredItem}>
          {(price * qty) / 100} {currency}
        </Grid>
        <Grid item xs={1} className={classes.CenteredItem}>
          {qty}
        </Grid>
        <Grid item xs={1} className={classes.CenteredItem}>
          <IconButton onClick={() => dispatch(removeFromBasket(id))}>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GridItem;
