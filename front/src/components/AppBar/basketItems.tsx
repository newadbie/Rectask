import { FC } from "react";

import BasketItem from "./basketItem";

import { useSelector } from "react-redux";
import { GetProducts } from "../../selectors";

import classes from "./basket.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const BasketItems: FC = () => {
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
        <BasketItem {...product} />
      ))}
      <Link to="/basket">
        <Button color="primary" variant="contained">
          Checkout
        </Button>
      </Link>
    </div>
  );
};

export default BasketItems;
