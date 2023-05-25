import { useEffect, useState } from "react";
import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
import ProductCard from '../ProductCard/ProductCard';
import Product from '../../interfaces';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

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
    <div className="product-container">
      <div className="category_filter">
        <h3>Filter by category</h3>
        <CategoryDropDown />
      </div>
      <h2>Product List</h2>
      <Grid container spacing={2}>
      {products.map(product => {
        return <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
          /> 
        })}
      </Grid>
    </div>
  );
}