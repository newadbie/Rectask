import React from "react";

import BasketItem from "./basketItem";

import { useSelector } from "react-redux";
import { GetProducts } from "../../selectors";

import classes from "./basket.module.css";

const BasketItems = React.forwardRef(() => {
  const products = useSelector(GetProducts);

  return (
    <div className={classes.Basket}>
      <div className={classes.FirstRow}>
        <div className={classes.Img}>Photo</div>
        <div className={classes.Title}>Title</div>
        <div className={classes.Price}>Price</div>
        <div className={classes.Qty}>
          <span>Quantity</span>
        </div>
        <div className={classes.Action}>-</div>
      </div>
      {products.map((product) => (
        <BasketItem key={product.id} {...product} />
      ))}
    </div>
  );
});

export default BasketItems;
