import React, { FC, useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../slices/basketSlice";
import { GetBasketLength } from "../../selectors";

import classes from "./style.module.css";
import BasketItems from "./basketItems";
import { Link } from "react-router-dom";

const AppBarComp: FC = () => {
  const basketLength = useSelector(GetBasketLength);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

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
          <Typography variant="h6">Recruitment task</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              style={{ maxHeight: "60vh" }}
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
              <div className={classes.CheckoutButton}>
                <Link to="/basket" onClick={() => dispatch(setStep(0))}>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </Menu>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
