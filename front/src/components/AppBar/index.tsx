import React, { FC, useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useSelector } from "react-redux";
import { GetBasketLength } from "../../selectors";

import classes from "./style.module.css";

const AppBarComp: FC = () => {
  const basketLength = useSelector(GetBasketLength);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container className={classes.Container}>
          <Typography variant="h6">Zadanie rekrutacyjne</Typography>
          <IconButton color="inherit">
            <Badge badgeContent={basketLength.toString()} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
