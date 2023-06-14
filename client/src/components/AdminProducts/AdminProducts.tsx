import * as React from 'react';
import { useEffect, useState } from "react";
import { Product } from "../../context/ProductContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NavLinks from '../NavLinks/NavLinks';
import { NavLink } from 'react-router-dom';

export default function AdminProducts() {
  const [products, setProducts ] = useState<Product[]>([]);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [inStock, setInStock] = useState("")
  //const {products} = useProductContext();

  const getAllProducts = async () => {
    try {
      const response = await fetch("api/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //----------------------------Alert to confirm before delete-------------------------------------//

  const [open, setOpen] = React.useState(false);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseAlert = () => {
    setOpen(false);
    setIsDeleteConfirmation(false);
  };

  //----------------------------START - Deleting product from database-------------------------------------//

  const deleteProductFromDatabase = (id: string) => {
    const url = 'api/products/' + id;
    fetch(url, {method: "DELETE"})
      .then((response) => {
        if (!response){
          throw new Error("ERROR - Something went wrong, the product with " + id + " is not deleted");
        }
        console.log("OK - Product with id " + id + " is now deleted from database");
        //RENDER ALL PRODUCTS AGAIN
        getAllProducts();
      })
      .catch ((e) => {
        console.log(e);
      });
  };

  //Eventlistener on delete button
  const handleDelete = async (event: React.MouseEvent<HTMLElement>, id:string) => {
    event.preventDefault();
    deleteProductFromDatabase(id);
    setIsDeleteConfirmation(true);
  };

  //----------------------------END - Deleting product from database-------------------------------------//

  const handleUpdate = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setTitle("");
    console.log('hej');
  };

  return (
    <>
      <div style={{width: '5rem', margin: 'auto', paddingTop: '10px', paddingBottom: '10px'}}>
        <NavLink to="/admin" style={{textDecoration: "none" }}>
          <Button variant='outlined'>Back</Button>
        </NavLink>
      </div>

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
              <Box>
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

              <Box style={{width: '5%'}}>
                <span className="product-price ">{product && formatCurrency(product?.price)}</span>
              </Box>

              <Button variant='outlined' type="submit" endIcon={<DeleteForeverIcon />} onClick={handleClickOpen}>Delete</Button>

              <Dialog
                open={open}
                onClose={handleCloseAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {!isDeleteConfirmation
                    ? 'Are you sure you want to delete this product from the database?'
                    : 'The product is now deleted'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {!isDeleteConfirmation
                      ? 'This will delete the product from the database'
                      : ''}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={(e) => handleDelete(e, product._id)} autoFocus>
                    {!isDeleteConfirmation
                      ? 'YES'
                      : ''}
                  </Button>
                  <Button onClick={handleCloseAlert}>
                    {!isDeleteConfirmation
                      ? 'NO'
                      : 'CLOSE'}
                  </Button>
                </DialogActions>
              </Dialog>

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
