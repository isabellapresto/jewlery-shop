import { createContext, useContext, ReactNode, useState} from "react"
// import Cart from '../components/Cart/Cart'

type CartItem = {
    id: string
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (id: string) => void
    decreaseCartQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type ShoppingCartProviderProps = {
    children: ReactNode
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export default function ShoppingCartProvider( { children }: ShoppingCartProviderProps ) {
    const [cartItems, setCartItems ] = useState<CartItem[]>([])

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function decreaseCartQuantity(id: string) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function removeFromCart(id: string) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }

    const cartQuantity = cartItems.reduce((quantity, item) =>
    item.quantity + quantity, 0)



    return <ShoppingCartContext.Provider value={{ 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart,
        cartQuantity,
        cartItems}}>
        { children }

    </ShoppingCartContext.Provider>
}