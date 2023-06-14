import { useProductContext } from "../../context/ProductContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { formatCurrency } from "../../utilities/formatCurrency";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

export default function AdminProducts() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [inStock, setInStock] = useState("")
  const {products} = useProductContext();

 const handleUpdate = async (e: { preventDefault: () => void; }) => {
  e.preventDefault()
  setTitle("");
  console.log('hej')
}


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
          <Button variant='outlined' endIcon={<ExpandMoreIcon />}>Modify product</Button>
      </Stack>
      </AccordionSummary>
      
      <AccordionDetails>
      <Box>
          <span className="product-description">{product.description}</span>
        </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50' }
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleUpdate}
    >
      <TextField required
          id="outlined-required" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/> <br />
      <TextField required
          id="outlined-required" label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <TextField required
          id="outlined-required" label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <TextField required
          id="outlined-required" label="Image URL" variant="outlined" value={image} onChange={(e) => setImage(e.target.value)}/>
      <TextField required
          id="outlined-required" label="In Stock" variant="outlined" value={inStock} onChange={(e) => setInStock(e.target.value)}/>
      {/* <TextField required
          id="outlined-required" label="Categories" variant="outlined" /> */}
        <Button variant='outlined' type="submit">Update product</Button>
    </Box>
      </AccordionDetails>
    </Accordion>
    ))}
    </>
  )
}