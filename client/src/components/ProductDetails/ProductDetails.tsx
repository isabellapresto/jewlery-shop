import { useEffect, useState } from "react";
//import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";

export default function ProductDetails() {
  function inStockProduct(inStock: number) {
    if (inStock == 0) {
      return "Not in stock";
    } else if (inStock < 20) {
      return "Few in stock";
    } else {
      return "In stock";
    }
  }

  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/products/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [id]);

  return product ? (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={6}
          sx={{
            textAlign: "center",
            gap: 2,
          }}
        >
          <h2>{product.title}</h2>
          <p style={{ fontStyle: "italic" }}>{product.price} kr</p>
          <p>{product.description}</p>
          <p>{inStockProduct(product.inStock)}</p>
          <PurchaseBtn />
        </Grid>
      </Grid>
    </Container>
  ) : null;
}
