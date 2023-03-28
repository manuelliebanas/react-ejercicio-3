import {createContext, useState} from 'react'

export const CartContext = createContext([])
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const addToCart = (item, qty) => {
        setCartList((prevState) => {
            const nextState = [
                ...prevState,
                {
                    id: item.id,
                    image: item.image[0],
                    title: item.name,
                    price: item.cost,
                    qty
                }
            ]
            localStorage.setItem('cart', JSON.stringify(nextState))
            return nextState
        })
    }

    const deleteItem = (id) => {
        setCartList(() => {
            const cart = cartList.filter(item => item.id !== id)
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        })
    }
    const clearCart = () => {
        setCartList(() => {
            localStorage.removeItem('cart')
            return []
        })
    }
    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider
