import { FC } from "react";

import BasketItem from "./basketItem";

import { useSelector } from "react-redux";
import { GetProducts } from "../../selectors";

import classes from "./basket.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = {
  closeBasketMenu: () => void;
};

const BasketItems: FC<Props> = ({ closeBasketMenu }) => {
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
      <div className={classes.CheckoutButton}>
        <Link to="/basket">
          <Button
            onClick={() => closeBasketMenu()}
            color="primary"
            variant="contained"
          >
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BasketItems;
