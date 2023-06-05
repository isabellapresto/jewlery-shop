// import { useShoppingCart } from "../../context/CartContext"
// import { products } from "../../context/ProductContext"
// import Stack from '@mui/material/Stack';



// type CartItemProps = {
//     id: string
//     quantity: number
// }
// //Detta ska bli Orderitem. id -> product

// export default function CartItem( { id, quantity} : CartItemProps) {
//     // const { removeFromCart } = useShoppingCart()
//     const item = products.find(i => i.id === id)
//     if ( item === null) return null

//     return (
//         <Stack>
//             <div>
//           {item.name}{" "}
//           {quantity > 1 && (
//             <span style={{ fontSize: ".65rem" }}>
//               x{quantity}
//             </span>
//           )}
//         </div>
//         </Stack>
//     )
// }