import NavBar from "../components/NavBar.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from '../container/ItemListContainer.jsx';
import CartContextProvider from '../contexts/CartContext.jsx';
import Cart from '../components/Cart.jsx';
import ItemDetailContainer from '../container/ItemDetailContainer.jsx';

const Home = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/products/" element={<ItemListContainer/>}/>
                    <Route path="/detail/:idItem" element={<ItemDetailContainer/>}/>
                    <Route path="/products/:idCategory" element={<ItemListContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;
