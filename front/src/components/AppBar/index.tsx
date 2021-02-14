import React, { FC, useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useSelector } from "react-redux";
import { GetBasketLength } from "../../selectors";

import classes from "./style.module.css";
import BasketItems from "./basketItems";
import { Link } from "react-router-dom";

const AppBarComp: FC = () => {
  const basketLength = useSelector(GetBasketLength);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (basketLength === 0) {
      setAnchorEl(null);
    }
  }, [basketLength]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (basketLength > 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container className={classes.Container}>
          <Typography variant="h6">Zadanie rekrutacyjne</Typography>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="caption">
              <Link
                to="/"
                style={{
                  color: "#FFF",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Shop
              </Link>
            </Typography>

            <IconButton color="inherit" onClick={handleMenu}>
              <Badge badgeContent={basketLength.toString()} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar"
              style={{ maxHeight: "40vh" }}
              getContentAnchorEl={null}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              onClose={handleClose}
            >
              <BasketItems />
            </Menu>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
