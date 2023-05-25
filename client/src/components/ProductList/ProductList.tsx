
import { useEffect, useState } from "react";
import ProductModel from "../Models/productModel";
import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {
const [products, setProducts] = useState<ProductModel[]>([]);

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
    <div>
      <h3>Filter by category</h3>
      <CategoryDropDown />
      <h1>Product List</h1>
      <ProductCard />
      {products.map((product) => (
        <div key={product.title}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      ))}
    </div>
  );
}
