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
import { NavLink } from 'react-router-dom';


export default function AdminProducts() {
  const [products, setProducts ] = useState<Product[]>([]);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("")
  const [inStock, setInStock] = useState<number>(0);
  //const {products} = useProductContext();

  const getAllProducts = async () => {
      try {
        const response = await fetch(
          "api/products"
        );
        const data = await response.json();
        setProducts(data);

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

  //----------------------------START - Update a product in database-------------------------------------//

const updateProductInDatabase = (id: string) => {

  const url = 'api/products/' + id;

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      title: title,
      description: description,
      price: price,
      image: image,
      inStock: inStock,
      deleted: false,
    }),
  })
    .then((response) => {
      if (!response || response.status === 400){
        throw new Error("ERROR - Something went wrong, the product with " + id + " is not updated");
      }
      if ( title || description || price || image || inStock ) {
      console.log("OK - Product with id " + id + " is now updated in database")
      //RENDER ALL PRODUCTS AGAIN
      getAllProducts();
    }})
    
  .catch ((e) => {
    console.log(e);
  });
  }

  const handleEdit = (event: React.MouseEvent<HTMLElement>, id:string)=> {
    event.preventDefault();
    const selectedProduct = products.find(product => product._id === id);
    
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setImage(selectedProduct.image);
      setInStock(selectedProduct.inStock);      
    }
  }

const handleUpdate = async (event: React.MouseEvent<HTMLElement>, id:string) => {
  event.preventDefault();
  updateProductInDatabase(id);
}

//----------------------------END - Update a product in database-------------------------------------//

  return (
    <>
      <div style={{width: '5rem', margin: 'auto', paddingTop: '10px', paddingBottom: '10px'}}>
        <NavLink to="/admin" style={{textDecoration: "none" }}>
          <Button variant='outlined'>Back</Button>
        </NavLink>
      </div>
      
    {products.map((product) => (
      <Accordion key={product._id}>
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

      <Button onClick={(e) => handleEdit(e, product._id)} variant='outlined' endIcon={<ExpandMoreIcon />}>Edit</Button>
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
    >
      <TextField
          id="outlined-basic" 
          label="Title" 
          variant="outlined" 
          required={false} 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
      /> <br/>

      <TextField
          id="outlined-basic" 
          label="Description" 
          variant="outlined" 
          required={false} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
      />

      <TextField
          id="outlined-basic" 
          label="Price" 
          variant="outlined" 
          required={false} 
          value={price} 
          onChange={(e) => setPrice(Number(e.target.value))}
      />

      <TextField
          id="outlined-basic" 
          label="Image URL" 
          variant="outlined" 
          required={false} 
          value={image} 
          onChange={(e) => setImage(e.target.value)}
        />

      <TextField 
          id="outlined-basic" 
          label="In Stock" 
          variant="outlined" 
          required={false} 
          value={inStock} 
          onChange={(e) => setInStock(Number(e.target.value))}
        />
 
        <Button variant='outlined' type="submit" onClick={(e) => handleUpdate(e, product._id)}>Update</Button>


    </Box>
      </AccordionDetails>
    </Accordion>
    ))}

    </>
  )
}
