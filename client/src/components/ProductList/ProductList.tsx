import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@mui/material/Grid';
import './ProductList.css';
//import { useProductContext } from "../../context/ProductContext";
import { Product } from '../../context/ProductContext';

export default function ProductList() {

  //const {products} = useProductContext();

  const [ products, setProducts ] = useState<Product[]>([]);

  const getAllProducts = async () => {
      try {
        const response = await fetch(
          "api/products"
        );
        const data = await response.json();
        setProducts(data);
 
        console.log(data);

      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
      getAllProducts();
    }, []);
 
  return (
    <>
      <Grid
        container
        columns={4}
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
        paddingBottom='50px'
      >

        {products.map((product) => (
            <ProductCard product={product} key={product._id}/>
        ))}

      </Grid>
    </>
  );
}
