import { FC, useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";

import { BookProps, ProductProps } from "../types";

import axios from "axios";
import { useQuery } from "react-query";
import Item from "../components/Shop/item";

const Homepage: FC = () => {
  const [loadedProducts, setProducts] = useState<Array<ProductProps>>([]);

  const { isLoading, error, data } = useQuery("fetchBooks", () => {
    return axios.get("http://localhost:3001/api/book");
  });

  useEffect(() => {
    if (data) {
      setProducts(data.data.data);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container style={{ padding: "20px 0" }}>
      <Grid container spacing={6}>
        {loadedProducts.map((product) => (
          <Item {...product} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
