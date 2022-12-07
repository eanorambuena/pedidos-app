import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Flex} from '@chakra-ui/react';

import useUser from '../hooks/useUser';
import ProfileImage from './ProfileImage';

const Menu = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    return (
        <Flex justifyContent="center" gap={5} className="nav" flexWrap="wrap"
            backgroundColor="brand.0" minH="11vh" alignItems="center">
            <Button className = "nav-item" onClick = {() => navigate("/")}
            variant="ghost" color="brand.2">
                Home
            </Button>
            <Button className = "nav-item" onClick = {() => navigate("/nosotros")}
            variant="ghost" color="brand.2">
                Nosotros
            </Button>
            {
                user.name ? (
                    <>
                        <Button className = "nav-item" onClick = {() => navigate("/pide")}
                            variant="ghost" color="brand.2">
                            Pedidos
                        </Button>
                        <ProfileImage avatarSrc={user.profileImage} avatarAlt={user.name}/>
                    </>
                ) : null
            }
        </Flex>
    )
}

export default Menu