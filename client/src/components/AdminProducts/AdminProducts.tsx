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


export default function AdminProducts() {

  const [ products, setProducts ] = useState<Product[]>([]);

  const getAllProducts = async () => {
      try {
        const response = await fetch(
          "api/products"
        );
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
        console.log("OK - Product with id " + id + " is now deleted from database")
        //RENDER ALL PRODUCTS AGAIN
        getAllProducts();
      })
      
    .catch ((e) => {
      console.log(e);
    });
    }
  
    //Eventlistener on delete button
      const handleDelete = async (event: React.MouseEvent<HTMLElement>, id:string) => {
        event.preventDefault();
        deleteProductFromDatabase(id);
        setIsDeleteConfirmation(true);
      }
  
  //----------------------------END - Deleting product from database-------------------------------------//

 
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

        <Button variant='outlined'>Modify product</Button>

        <Button variant='outlined' type="submit" onClick={handleClickOpen}>Delete</Button>
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
          <Button onClick={handleCloseAlert}>
          {!isDeleteConfirmation
            ? 'NO'
            : 'CLOSE'}
          </Button>
          <Button onClick={(e) => handleDelete(e, product._id)} autoFocus>
          {!isDeleteConfirmation
            ? 'YES'
            : ''}
          </Button>
        </DialogActions>
      </Dialog>

    </Stack>
        ))}
    </>
  );
}