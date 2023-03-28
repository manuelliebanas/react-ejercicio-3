import {AppBar, Toolbar, Typography, Box, Button, IconButton, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const StyledAppBar = styled(AppBar)`
      && {
        background-color: #333;
        color: #fff;
      }
    `;
    const LinkButton = styled(Link)`
      && {
        color: inherit;
        text-decoration: none;
        color: white;

        &:hover {
          color: #76defa;

        }
      }
    `;


    return (
        <StyledAppBar position="static">
            <Toolbar sx={{
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h6" component="div">
                    Tienda Manuel
                </Typography>
                <Box>
                    <Button><LinkButton to="/products/">Productos</LinkButton></Button>
                    <Button><LinkButton to="/products/1">Vinos</LinkButton></Button>
                    <Button><LinkButton to="/products/9">Sin alcohol</LinkButton></Button>
                    <Button><LinkButton to="/products/5">Licores</LinkButton></Button>
                </Box>
                <Box>
                    <Button><LinkButton>Registro</LinkButton> </Button>
                    <Button><LinkButton>Login</LinkButton> </Button>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <LinkButton to="/cart">
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon/>
                            </Badge>
                        </LinkButton>
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
