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
        <Stack direction="row"
        spacing={3}
        alignItems="center"
        marginLeft={'5%'}
        width={'90%'}
        justifyContent={'space-between'}
        >

        <Box >
            <img 
            src={product?.image}
            style={{width: '50px', height: '50px', objectFit: 'cover'}}
            />
        </Box>

        <Box style={{width: '40%'}}>
            <span className="product-title">{product?.title} {" "}</span>
            
        </Box>
        <Box style={{width: '10%'}}>
          <span className="product-price ">{product && formatCurrency(product?.price)}</span>
          </Box>
        <Button variant='outlined'>Modify product</Button>
        <Button variant='outlined'>Remove product</Button>
    </Stack>
        ))}
    </>
  );
}