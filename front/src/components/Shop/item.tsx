import React, { FC } from "react";

import {
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Paper } from "@material-ui/core";
import { ProductProps } from "../../types";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const Item: FC<ProductProps> = ({
  title,
  price,
  currency,
  cover_url,
  children,
  ...props
}) => {
  const dispatch = useDispatch();
  const addToBasketHandler = () => {
    const newProduct: ProductProps = {
      title: title,
      price: price,
      currency: currency,
      cover_url: cover_url,
      ...props,
    };

    dispatch(addToBasket(newProduct));
  };
  return (
    <Grid item xs={4}>
      <Paper style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "20px",
            right: "20px",
            background: "rgba(255,0,0,.9)",
            padding: "10px",
            borderRadius: "100%",
            width: "50px",
            height: "50px",
          }}
        >
          <p
            style={{
              padding: 0,
              margin: 0,
              textAlign: "center",
              fontWeight: "bold",
              color: "#FFF",
              textShadow: "3px 3px 3px black",
            }}
          >
            {price / 100} {currency}
          </p>
        </div>
        <Card>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={cover_url}
            title={title}
          />
        </Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          {children ? (
            <Typography variant="body2" color="textSecondary" component="p" style={{marginTop: '10px'}}>
              {children}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to basket"
            onClick={() => addToBasketHandler()}
          >
            <AddCircleIcon />
          </IconButton>
          <Typography>Add to the basket</Typography>
        </CardActions>
      </Paper>
    </Grid>
  );
};

export default Item;
