import React, { FC } from "react";

import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import classes from "./style.module.css";

const AppBarComp: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.Container}>
          <Typography variant="h6">Zadanie rekrutacyjne</Typography>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              >
                <Badge badgeContent={11} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
