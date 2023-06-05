import { useShoppingCart } from "../../context/CartContext"
import Stack from '@mui/material/Stack';
import { useProductContext } from "../../context/ProductContext";

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

        <div>
            {item?.title} {" "} 
            {quantity > 1 && (
                <span>
                    x{quantity}
                </span>
            )}
        </div>

        <div>
           <p>{item?.price} SEK</p> 
        </div>
    </Stack>
)
}