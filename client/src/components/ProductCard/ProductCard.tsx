import { Product } from '../../context/ProductContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import PurchaseBtn from '../PurchaseBtn/PurchaseBtn';
 
type Props = {
  product: Product}


export default function ProductCard ({product} : Props) {

return (
  <Card sx={{ width: 300, height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}> 
    <Link to={`/${product._id}`} key = {product._id} >
    <CardMedia
      component='img'
      alt={product.title}
      image= {product.image}
      height='300'
    />
    </Link>

    <CardContent>
      <Typography gutterBottom variant="h6" component="div" fontSize="13px" fontWeight="bold" textAlign="center">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="12px">
        {product.price + " SEK"}
      </Typography>
    </CardContent>

    <CardActions>
      <PurchaseBtn product={product}/>
    </CardActions>
  </Card>
);
}