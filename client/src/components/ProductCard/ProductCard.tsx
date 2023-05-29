import PurchaseBtn from '../PurchaseBtn/PurchaseBtn'
import Product from '../../interfaces'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductCard.css';

export default function ProductCard ({image, title, price}: Product) {

return (
  <Card sx={{ width: 300, height: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}> 
    <CardMedia
      sx={{ width: 300, height: 300 }}
      image= {image}
      title={title}
    />

    <CardContent>
      <Typography gutterBottom variant="h6" component="div" fontSize="13px" fontWeight="bold" textAlign="center">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="12px">
        {price} SEK
      </Typography>
    </CardContent>

    <CardActions>
      <PurchaseBtn />
    </CardActions>
  </Card>
);
}