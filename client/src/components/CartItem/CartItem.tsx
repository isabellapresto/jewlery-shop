import { useShoppingCart } from "../../context/CartContext"
import { useProductContext } from "../../context/ProductContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

//SKULLE BEHÖVA ANVÄNDA DENNA FÖR PRISET MEN FÅR FEL I KODEN DÅ - HJÄLP!!!!
//DEN FUNKTIONEN FUNGERAR I DRAWER - VARFÖR INTE HÄR????
//import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
    id: string
    quantity: number
}
//Detta ska bli Orderitem. id -> product


export default function CartItem( { id, quantity} : CartItemProps) {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const {products} = useProductContext();

    const item = products.find(i => i._id === id)
    if ( item === null) return null

    return (
    <Stack>
        <div className="cartitem-container">
            <img 
            src={item?.image}
            style={{width: '50px', height: '50px', objectFit: 'cover'}}
            />

            <div className="cartitem-info">
                <span>{item?.title} {" "}</span>
                <br/>
                <span>{item && item.price * quantity} kr</span>
            </div>
        </div>

        <div className="cartitem-qty">
            <Button onClick={() => item && increaseCartQuantity(item?._id)}><AddIcon /></Button>
            <div>{quantity} st</div>
            <Button onClick={() => item && decreaseCartQuantity(item?._id)}><RemoveIcon /></Button>
            <Button onClick={() => item && removeFromCart(item?._id)}><DeleteIcon /></Button>
        </div>
 
    </Stack>
)
}