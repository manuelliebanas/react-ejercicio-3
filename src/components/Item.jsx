import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material/';

import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined /><Link to={`/detail/${id}`}>Details</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;
