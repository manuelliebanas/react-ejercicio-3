import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {
    WrapperCart,
    TitleCart,
    ContentCart,
    Product,
    ProductDetail,
    ImageCart,
    Details,
    PriceDetail,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
} from './styledComponents';

const Cart = () => {
    const {cartList, deleteItem, clearCart} = useContext(CartContext);
    console.log(cartList)
    return <WrapperCart>
        <TitleCart>YOUR CART</TitleCart>
        <ContentCart>
            {(cartList?.length === 0) && <p>Tu carrito esta vacio</p>}
            {(cartList?.length !== 0) && <button onClick={clearCart}>Delete all</button>}
            {cartList.map((item) =>
                <Product>
                    <ProductDetail>
                        <ImageCart src={item.image}/>
                        <Details>
                    <span>
                        <b>Product:</b> {item.title}
                    </span>
                            <button onClick={() => deleteItem(item.id)}>
                                Delete Button
                            </button>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <ProductAmount>{item.qty} items</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>{+item.price * +item.qty} €</ProductPrice>
                    </PriceDetail>
                </Product>)}
        </ContentCart>
    </WrapperCart>;
}

export default Cart;
