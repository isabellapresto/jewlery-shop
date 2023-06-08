import { useProductContext } from "../../context/ProductContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { formatCurrency } from "../../utilities/formatCurrency";

export default function AdminProducts() {

  const {products} = useProductContext();

  return (
    <>
        {products.map((product) => (
        <Stack direction="row" spacing={3} alignItems="center" marginLeft={'10rem'} width={'80%'} justifyContent={'space-between'}>
        <Box>
            <img 
            src={product?.image}
            style={{width: '50px', height: '50px', objectFit: 'cover'}}
            />
        </Box>

        <Box>
            <span className="product-title">{product?.title} {" "}</span>
            <span className="product-price ">{product && formatCurrency(product?.price)}</span>
        </Box>
        <Button variant='outlined'>Modify product</Button>
        <Button variant='outlined'>Remove product</Button>
    </Stack>
        ))}
    </>
  );
}