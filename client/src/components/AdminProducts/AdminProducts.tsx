import { useProductContext } from "../../context/ProductContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { formatCurrency } from "../../utilities/formatCurrency";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function AdminProducts() {


  const {products} = useProductContext();

  return (
    <>
    {products.map((product) => (
      <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction="row"
        spacing={3}
        alignItems="center"
        marginLeft={'5%'}
        width={'100%'}
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
        <Box style={{width: '5%'}}>
          <span className="product-price ">{product && formatCurrency(product?.price)}</span>
          </Box>
          <Button variant='outlined' endIcon={<DeleteForeverIcon />}>Remove product</Button>
          <Button variant='outlined' endIcon={<ExpandMoreIcon />}>Modify product </Button>
      </Stack>
      </AccordionSummary>
      <AccordionDetails>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required
          id="outlined-required" label="Image" variant="outlined" />
      <TextField required
          id="outlined-required" label="Name" variant="outlined" />
      <TextField required
          id="outlined-required" label="Price" variant="outlined" />
    </Box>
      </AccordionDetails>
    </Accordion>
    ))}
    </>
  )
}