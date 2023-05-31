import { useEffect, useState } from "react";
import ProductCard from '../ProductCard/ProductCard';
import Product from '../../interfaces';
import { useParams } from "react-router-dom";


export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/products/${_id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProduct(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, []);

  return   (


    // <>
    //   {products.map(product => {
    //     return <ProductCard 
    //       image={product.image}
    //       title={product.title}
    //       price={product.price}
    //       description={product.description}
    //       /> 
    //     })}
    // </>

<div>
<h1>{product.title}</h1>
<p>{product.description}</p> 
</div>



  );
}
