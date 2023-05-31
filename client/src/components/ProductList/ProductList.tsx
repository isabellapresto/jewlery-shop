// import { useEffect, useState } from "react";
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../context/ProductContext';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { useProductContext } from "../../context/ProductContext";

export default function ProductList() {

  const {products} = useProductContext();

  return (
    <>
      <Grid
        container
        columns={4}
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

      {products.map((product) => (
        <Link to={`/${product._id}`} key={product._id}>
        <ProductCard product={product} /> </Link>
      ))}
      </Grid>
    </>
  );
}

