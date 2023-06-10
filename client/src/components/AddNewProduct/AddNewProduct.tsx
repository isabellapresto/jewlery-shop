
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { NewProduct } from '../../context/ProductContext'


export default function AddNewProduct() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: '',
    description: '',
    price: 0,
    image: '',
    inStock: 0,
  });

  //----------------------------START - Handle inputfield for add new product-------------------------------------//

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  //----------------------------END - Handle inputfield for add new product-------------------------------------//


  //----------------------------START - Add/send new product to database-------------------------------------//

  const sendNewProductToDataBase = async (productData: NewProduct) => {
    
    const { title, description, price, image, inStock } = productData;
   
    console.log(" NEW PRODUCT BEFORE SENDING TO DATABASE", productData);

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

      console.log('PRODUCT RESPONSE', productResponse)

      if (productResponse.ok) {
        const newProductToDatabase = await productResponse.json();
        console.log("New product successfully added to the database:", newProductToDatabase);
      }
    } catch (error) {
      console.error("Error adding new product to the database:", error);
    }
  };

  //----------------------------END - Add/send new product to database-------------------------------------//

  //----------------------------START - Handle submit / button-------------------------------------//

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    sendNewProductToDataBase(newProduct);
  };

  //----------------------------END - Handle submit / button-------------------------------------//

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Product Name"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Product Description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
            fullWidth
          />
         </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image URL"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="In Stock"
            name="inStock"
            value={newProduct.inStock}
            onChange={handleInputChange}
            required
            fullWidth
          />
         </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </Grid>
    </Grid>
    </form>
  )
}

