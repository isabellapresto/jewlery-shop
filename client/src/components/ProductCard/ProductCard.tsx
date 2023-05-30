import PurchaseBtn from '../PurchaseBtn/PurchaseBtn'
import Product from '../../interfaces'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductCard.css';

export type Props = {
  product: Product
}

export default function ProductCard ({ product }: Props) {

return (
  <Card sx={{ width: 300, height: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}> 
    <CardMedia
      sx={{ width: 300, height: 300 }}
      image= {product.image}
      title={product.title}
    />

    <CardContent>
      <Typography gutterBottom variant="h6" component="div" fontSize="13px" fontWeight="bold" textAlign="center">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="12px">
        {product.price + " SEK"}
      </Typography>
    </CardContent>

    <CardActions>
      <PurchaseBtn />
    </CardActions>
  </Card>
);
}