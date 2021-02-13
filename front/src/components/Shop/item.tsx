import { CardContent, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Paper } from "@material-ui/core";
import React, { FC } from "react";
import { ProductProps } from "../../types";

const Item: FC<ProductProps> = ({ title, price, currency, cover_url }) => {
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
              textAlign: 'center',
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
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default Item;
