
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { NavLink } from "react-router-dom";
import { NewProduct } from '../../context/ProductContext';
import Alert from '@mui/material/Alert';
import '../AddNewProduct/AddNewProduct.css'


export default function AddNewProduct() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");
  const [inStock, setInStock] = useState<number>(0);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  //----------------------------START - Add/send new product to database-------------------------------------//

  const sendNewProductToDataBase = async (productData: NewProduct) => {
    
    const { title, description, price, image, inStock } = productData;
   
    try {
      const productResponse = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price,
          image: image,
          inStock: inStock
        }),
      });

      if (productResponse.ok) {
        const newProductToDatabase = await productResponse.json();
        console.log("New product successfully added to the database:", newProductToDatabase);

        setSuccess(true);
      }

      if ((productResponse.status === 400))
      setSuccess(false);

    } catch (error) {
      console.error("Error adding new product to the database:", error);
    }
  }

  //----------------------------END - Add/send new product to database-------------------------------------//

  //----------------------------START - Handle Alert visibility-------------------------------------//

  function toggleShow() {
    setShow(!show);
  }

  //----------------------------END - Handle Alert visibility-------------------------------------//

  //----------------------------START - Handle submit / button-------------------------------------//

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct : NewProduct = {
      title,
      description,
      price,
      image,
      inStock,
    };

    sendNewProductToDataBase(newProduct);
    toggleShow();

  };

  //----------------------------END - Handle submit / button-------------------------------------//

  return (

    <div style={{paddingBottom: '50px'}}>

      <div style={{width: '5rem', marginLeft: '30%', paddingTop: '10px', paddingBottom: '10px'}}>
        <NavLink to="/admin" style={{textDecoration: "none" }}>
          <Button variant='outlined'>Back</Button>
        </NavLink>
      </div>

      <h3 style={{textAlign: 'center', paddingBottom: '25px'}}>Add a new product to the database</h3>
   
      <form onSubmit={handleSubmit} style={{width: '40%', margin: 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Product Name"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Product Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            fullWidth
          />
         </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image URL"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="In Stock"
            name="inStock"
            value={inStock}
            onChange={(e) => setInStock(Number(e.target.value))}
            required
            fullWidth
          />
         </Grid>
        <Grid item xs={12}>

        { show && !success ? (
          <Alert severity="error" style={{marginBottom: '2rem'}}>ERROR - Error adding new product to the database.<br></br> Please try again</Alert>
            ) : (
          <Alert severity="error" style={{display: 'none'}}></Alert> 
        )}

        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>

        { show && success ? (
          <Alert severity="success" style={{marginTop: '2rem'}}>SUCCESS - New product add to the database</Alert>
            ) : (
          <Alert severity="success" style={{display: 'none'}}></Alert> 
        )}

        </Grid>
      </Grid>
    </form>
  </div>
  )
}