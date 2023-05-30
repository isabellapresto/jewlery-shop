import { useEffect, useState } from "react";
import ProductCard from '../ProductCard/ProductCard';
import Product from '../../interfaces';


export default function ProductDetails() {
  const [products, setDetails] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiUrl = "http://localhost:3000/api/products/${id}";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
      {products.map(product => {
        return <ProductCard 
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          /> 
        })}
    </>
  );
}