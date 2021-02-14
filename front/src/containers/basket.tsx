import React, { FC } from "react";

import BasketGrid from "../components/Basket/basketGrid";
import { Container, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Basket: FC = () => {
  return (
    <Container>
      <header>
        <Typography
          variant="h2"
          style={{ textAlign: "center", padding: "20px 0" }}
        >
          Basket
        </Typography>
      </header>
      <main>
        <BasketGrid />
      </main>
    </Container>
  );
};

export default Basket;
