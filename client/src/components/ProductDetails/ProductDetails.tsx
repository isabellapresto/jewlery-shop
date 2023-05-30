import { useEffect, useState } from "react";
//import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  //const [product, setProduct] = useState(null);

  function inStockProduct(inStock: number) {
    if (inStock == 0) {
      return "Ej i lager";
    } else if (inStock < 20) {
      return "Fåtal i lager";
    } else {
      return "I lager";
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
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.inStock}</p>
      <p>{inStockProduct(product.inStock)}</p>
    </div>
  ) : null;
}
