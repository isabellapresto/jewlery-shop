//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
//import { Product } from "../../context/ProductContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { formatCurrency } from "../../utilities/formatCurrency";


export default function AdminProducts() {

  const {products} = useProductContext();

  //----------------------------START - Deleting product from database-------------------------------------//

  const deleteProductFromDatabase = (id: string) => {

    const url = 'api/products/' + id;
  
    fetch(url, {method: "DELETE"})
      .then((response) => {
        if (!response){
          throw new Error("Something went wrong, the product with " + id + " is not deleted");
        }
        console.log("Product with id " + id + " is now deleted from database")
        //RENDER ALL PRODUCTS AGAIN
      })
      
    .catch ((e) => {
      console.log(e);
    });
    }
  
    //Eventlistener on delete button
      const handleDelete = async (event: React.MouseEvent<HTMLElement>, id:string) => {
        event.preventDefault();
        deleteProductFromDatabase(id);
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

        <Button variant='outlined' type="submit" onClick={(e) => handleDelete(e, product._id)}>Delete</Button>

    </Stack>
        ))}
    </>
  );
}