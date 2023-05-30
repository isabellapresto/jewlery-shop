import { useEffect, useState } from "react";
import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
import ProductCard from '../ProductCard/ProductCard';
import Product from '../../interfaces';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = "http://localhost:3000/api/products";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="category_filter">
        <h3>Filter by category</h3>
        <CategoryDropDown />
      </div>
      <h2>Product List</h2>

      <Grid
        container
        columns={{ xs: 4 }}
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
      {products.map((product) => (
        <Link to={`/${product._id}`} key={product._id}>
        <ProductCard
        image={product.image}
        title={product.title}
        price={product.price}
        _id={product._id}
        /> </Link>
        ))}
      </Grid>
    </>
  );
}

