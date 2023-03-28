import ItemCount from './ItemCount';
import {
    DetailContainer,
    WrapperDetail,
    ImgContainer,
    ImageDetail,
    InfoContainer,
    Title,
    Desc,
    Price
} from './styledComponents';
import {CartContext} from '../contexts/CartContext';
import {useContext} from 'react'

const ItemDetail = ({item}) => {
    const {addToCart} = useContext(CartContext);
    const onAdd = (qty) => {
        addToCart(item,qty)
    }

    return (
        <>
            {
                (item.image && item.image[0])
                    ?
                    <DetailContainer>
                        <WrapperDetail>
                            <ImgContainer>
                                <ImageDetail src={item.image[0]}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.name}</Title>
                                <Desc>{item.description}</Desc>
                                <Price>$ {item.cost}</Price>
                                <Desc>{item.stock} unidades en stock</Desc>
                            </InfoContainer>
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                        </WrapperDetail>
                    </DetailContainer>
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;
