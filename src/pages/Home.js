import { useEffect, useState } from 'react'
import { Button, Flex, Input, Image, Box } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

import useUser from '../hooks/useUser';
import Header from '../components/Header';

const Home = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const handleButton = () => {
        if (!user.name) {
            navigate("/login");
        }
    }

    return (
        <>
            <Header>Bienvenid@ a Pedidos App</Header>
            <Flex flexWrap="wrap" justifyContent="center" h="100%" w="100%" 
                alignItems="center" m={0} flexDirection="column" gap={0}
                bgImage="https://i.blogs.es/fff4ca/pizzas/1366_2000.jpg">
                <Input placeholder="Pizza, sushi, ..." w={{base: "80%", lg: "40%"}}
                    backgroundColor="brand.0" bgImage="none" m={10} mb={0}/>
                <Button backgroundColor="brand.2" color="brand.0" m={10}
                    variant="solid" size="lg" onClick={handleButton}>
                    Pedir
                </Button>
            </Flex>
        </>
    );
}

export default Home