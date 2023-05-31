
import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';

export interface Product {
    _id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    inStock: number,
    categories: string[]
  }

  interface ProductContext {
    products: Product[];
  }


const ProductContext = createContext<ProductContext>({ products: []})
export const useProductContext = () => useContext(ProductContext)

const ProductProvider = ({children}: PropsWithChildren) => {
    const [ products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    }, [])


    return (
    <ProductContext.Provider value = {{ products }}>
        {children}
    </ProductContext.Provider>
)

}

export default ProductProvider
