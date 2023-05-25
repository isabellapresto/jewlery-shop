import PurchaseBtn from '../PurchaseBtn/PurchaseBtn'
import Product from '../../interfaces'
import Grid from '@mui/material/Grid';

export default function ProductCard ({image, title, price}: Product) {
  return (
    <Grid xs={3}>
      <img
        src={image}
        alt={title}
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <div className='product_card_info'>
        <h3>{title}</h3>
        <p>Price: {price} SEK</p>
        <PurchaseBtn />
      </div>
  </Grid>
  );
}
