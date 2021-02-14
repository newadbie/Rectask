import { FC } from "react";

import { ProductProps } from "../../types";

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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
  return (
    <div className={classes.Item}>
      <div className={classes.Img}>
        <img src={cover_url} />
      </div>
      <div className={classes.Title}>
        {title}
      </div>
      <div className={classes.Price}>
          {(price * qty) / 100} {currency}
      </div>
      <div className={classes.Qty}>
          {qty}
      </div>
      <div className={classes.Action}>
          <IconButton>
              <RemoveCircleIcon />
          </IconButton>
      </div>
    </div>
  );
};

export default BasketItem;
