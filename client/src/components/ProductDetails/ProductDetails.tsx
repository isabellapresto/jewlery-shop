import { useEffect, useState } from "react";
import { Product } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
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
    <Container style={{margin:'3rem'}}>
        <Stack
        direction="row"
        spacing={2}
        useFlexGap flexWrap="wrap">
        <div style={{ width: "40%"}}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div> 
        <div style={{ width: "50%",
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem'
                      }}>
          <h2>{product.title}</h2>
          <p style={{ fontStyle: "italic" }}>{product.price} kr</p>
          <p>{product.description}</p>
          <p>{inStockProduct(product.inStock)}</p>
          <PurchaseBtn product={product} />
          </div>
        </Stack>
    </Container>
  ) : null;
}
