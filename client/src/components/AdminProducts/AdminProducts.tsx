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
import { Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NewProduct } from '../../context/ProductContext';
import { NavLink } from 'react-router-dom';


export default function AdminProducts() {
  const [products, setProducts ] = useState<Product[]>([]);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [image, setImage] = useState("")
  const [inStock, setInStock] = useState<number>(0)

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

const [newProduct, setNewProduct] = useState<NewProduct>()

const updateProduct = async (id: string) => {
            
  try{
    const updatedFields: Partial<NewProduct> = {};

    if (title !== "") {
      updatedFields.title = title;
    }
    if (description !== "") {
      updatedFields.description = description;
    }
    if (price !== 0) {
      updatedFields.price = price;
    }
    if (image !== "") {
      updatedFields.image = image;
    }
    if (inStock !== 0) {
      updatedFields.inStock = inStock;
    }
    


      const response = await fetch(`api/products/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: id,
            ...updatedFields,
            deleted: false,
          })
      });
      const data = await response.json();
      
      if (response.status === 200) {
          
              setNewProduct(data)
              getAllProducts();
              console.log("updated product");          
        
        } else {
          console.log("sorry, we could not update product");
        }
} catch (err) {
console.log(err);
}

}

const handleUpdate = async (event: React.MouseEvent<HTMLElement>, id:string) => {
  event.preventDefault();


  updateProduct(id);
}

  return (
    <>
      <div style={{width: '5rem', margin: 'auto', paddingTop: '10px', paddingBottom: '10px'}}>
        <NavLink to="/admin" style={{textDecoration: "none" }}>
          <Button variant='outlined'>Back</Button>
        </NavLink>
      </div>
      
    {products.map((product) => (
      <Accordion key={product._id} >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        alignItems="center"
        marginLeft={'10%'}
        width={'80%'}
        justifyContent={'space-between'}
        
        >

        <Box>
          <img 
            src={product?.image}
            style={{width: '50px', height: '50px', objectFit: 'cover'}}
            />
        </Box>

        <Box style={{width: '300px'}}>
            <span className="product-title">{product?.title} {" "}</span>
        </Box>

        <Box>
          <span className="product-price ">{product && formatCurrency(product?.price)}</span>
        </Box>
          <Button variant='outlined' type="submit" endIcon={<DeleteForeverIcon /> } onClick={handleClickOpen}>Delete</Button>
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

          <Button variant='outlined' endIcon={<ExpandMoreIcon />}>Modify</Button>
      </Stack>
      </AccordionSummary>
      
      <AccordionDetails>
      <Grid container 
        spacing={2}
        alignItems={'center'}
        >

        <Grid item xs={12} md={12}>
        <span className="product-description">{product.description}</span>
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField
          id="outlined"
          label="Title"
          variant="outlined"
          value={title || product.title}
          onChange={(e) => setTitle(e.target.value || product.title)}
        />
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField 
          id="outlined"
          label="Description"
          variant="outlined"
          value={description || product.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField 
          id="outlined"
          label="Price"
          variant="outlined"
          value={price || product.price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField 
          id="outlined"
          label="Image URL"
          variant="outlined"
          value={image || product.image}
          onChange={(e) => setImage(e.target.value)}
        />
        </Grid>
        <Grid item xs={6} md={2}>
        <TextField
          id="outlined"
          label="In Stock"
          variant="outlined"
          value={inStock || product.inStock}
          onChange={(e) => setInStock(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={6} md={2}>
        <Button variant='outlined' type="submit" onClick={(e) => handleUpdate(e, product._id)}>Update product</Button>
        </Grid>
      </Grid>
      </AccordionDetails>
    </Accordion>
    ))}

    </>
  )
}

