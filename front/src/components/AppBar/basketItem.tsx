import { FC } from "react";

import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

import { ProductProps } from "../../types";

import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import classes from "./basket.module.css";
import { IconButton } from "@material-ui/core";

const BasketItem: FC<ProductProps> = ({
  id,
  title,
  price,
  cover_url,
  currency,
  qty,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.Item}>
      <div className={classes.Img}>
        <img src={cover_url} alt={title} />
      </div>
      <div className={classes.Title}>{title}</div>
      <div className={classes.Price}>
        {(price * qty) / 100} {currency}
      </div>
      <div className={classes.Qty}>{qty}</div>
      <div className={classes.Action}>
        <IconButton onClick={() => dispatch(removeFromBasket(id))}>
          <RemoveCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default BasketItem;
