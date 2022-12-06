import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ChakraProvider } from '@chakra-ui/react';

import useUser from '../hooks/useUser';
import ProfileImage from './ProfileImage';

const Menu = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <ChakraProvider>
      <nav>
        <Button className = "nav-item" onClick = {() => navigate("/")}
          variant="ghost" color="#282c34">
          Home
        </Button>
        <Button className = "nav-item" onClick = {() => navigate("/sobre-nosotros")}
          variant="ghost" color="#282c34">
          Sobre nosotros
        </Button>
        {
          user.name ? (
            <>
              <Button className = "nav-item" onClick = {() => navigate("/tareas")}
                variant="ghost" color="#282c34">
                Lista de tareas
              </Button>
              <ProfileImage avatarSrc={user.profileImage} avatarAlt={user.name}/>
            </>
          ) : null
        }
      </nav>
    </ChakraProvider>
  )
}

export default Menu