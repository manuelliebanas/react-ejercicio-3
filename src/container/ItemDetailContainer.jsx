import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import {products} from '../utils/products.js';
import ItemDetail from '../components/ItemDetail.jsx';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(500, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;
