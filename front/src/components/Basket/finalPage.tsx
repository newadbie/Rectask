import React, { FC, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { GetError } from "../../selectors";
import { resetBasket } from "../../slices/basketSlice";

const FinalPage: FC = () => {
  const error = useSelector(GetError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBasket());
  }, []);

  return (
    <Container>
      <header>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          {error ? error.title : "Everything is correct!"}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            padding: "20px",
            color: error ? "red" : "green",
          }}
        >
          {error
            ? error.message
            : "Everything went correct! Your order has been passed to the API!"}
        </Typography>
      </header>
    </Container>
  );
};

export default FinalPage;
