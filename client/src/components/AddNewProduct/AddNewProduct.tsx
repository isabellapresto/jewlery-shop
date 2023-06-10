
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface NewProduct {
  title: string;
  description: string;
  price: number,
  image: string,
  inStock: number
}

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: '',
    description: '',
    price: 0,
    image: '',
    inStock: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    setNewProduct({ title: '', description: '', price: 0, image: '', inStock: 0 });

    console.log(newProduct);
  };

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

