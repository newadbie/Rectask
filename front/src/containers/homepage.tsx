import { FC, useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import { BookProps } from "../types";

import axios from "axios";
import { useQuery } from "react-query";
import Item from "../components/Shop/item";

const Homepage: FC = () => {
  const [loadedProducts, setProducts] = useState<Array<BookProps>>([]);
  const [error, setErrorState] = useState<boolean>(false);

  const { isLoading, refetch, data } = useQuery(
    "fetchBooks",
    async () => {
      try {
        const result = await axios.get("http://localhost:3001/api/book");
        return result;
      } catch (err) {
        setErrorState(true);
      }
    },
    { enabled: false }
  );

    useEffect(() => {
      refetch();
    }, [refetch])

  useEffect(() => {
    if (data) {
      setProducts(data.data.data);
    }
  }, [data]);

  if (isLoading && !error) {
    return (
      <Container>
        <Typography variant="h1" style={{ textAlign: "center" }}>
          Loading...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h1" style={{ textAlign: "center" }}>
          Something went wrong, API refuse calls
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "20px 0" }}>
      <Grid container spacing={6}>
        {loadedProducts.map((product) => (
          <Item {...product} key={product.id}>
            <b>{product.author}</b>
            <br />
            <b>Liczba stron: </b> {product.pages}
          </Item>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
