import ProductCard from '../ProductCard/ProductCard';
import Grid from '@mui/material/Grid';
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
        marginTop="1.5rem"
      >

        {products.map((product) => (
            <ProductCard product={product} key={product._id}/>
        ))}

      </Grid>
    </>
  );
}
