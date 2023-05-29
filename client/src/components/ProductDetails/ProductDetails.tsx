import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductModel from "../Models/productModel";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductModel | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/products/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
