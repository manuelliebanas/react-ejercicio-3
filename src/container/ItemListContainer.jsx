import ItemList from '../components/ItemList';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import {products} from '../utils/products.js';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        customFetch(500, products.filter(item => {
            if (idCategory === undefined) return item
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    return (
        <>
            <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;
