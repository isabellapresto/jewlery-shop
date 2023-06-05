import { useShoppingCart } from "../../context/CartContext"
import { useProductContext } from "../../context/ProductContext";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete'

//SKULLE BEHÖVA ANVÄNDA DENNA FÖR PRISET MEN FÅR FEL I KODEN DÅ - HJÄLP!!!!
//DEN FUNKTIONEN FUNGERAR I DRAWER - VARFÖR INTE HÄR????
//import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
    id: string
    quantity: number
}
//Detta ska bli Orderitem. id -> product


export default function CartItem( { id, quantity} : CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const {products} = useProductContext();


    const item = products.find(i => i._id === id)
    if ( item === null) return null

    return (
    <Stack>
        <img 
            src={item?.image}
            style={{width: '75px', height: '75px', objectFit: 'cover'}}
        />

        <div className="cartitem-title">
            {item?.title} {" "} 
            {quantity > 1 && (
                <span>
                    <br />
                    x {quantity} st
                </span>
            )}
        </div>

        <div className="cartitem-price">
            {quantity > 1 ? (
                <span>à {item?.price} kr</span>
            ) : (
                <span>{item?.price} kr</span>
            )}
        </div>

        <div className="cartitem-totprice">
        {quantity > 1 && (
            <span>{item && item.price * quantity} kr</span>
        )} 
        </div>

        <IconButton aria-label="delete" onClick={()=> item && removeFromCart(item._id)}>
            <DeleteIcon />
        </IconButton>

    </Stack>
)
}