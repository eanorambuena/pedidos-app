import React from 'react'

import { Flex, Text } from '@chakra-ui/react'
import Header from '../components/Header'

const SobreNosotros = () => {
  return (
    <>
        <Header mb={7}>Sobre Nosotros</Header>
        <Flex color="brand.2" justifyContent="center" alignItems="center"
          h="20vh" flexWrap="wrap">
          <Flex justifyContent="center" w="80%">
            <Text textAlign="center" fontSize={24} w="100%">
              Pedidos App es una aplicación web que te permite realizar <b>pedidos</b> a tus tiendas favoritas.<br/>
              Pide de forma <b>rápida</b> y <b>sencilla</b>, y recibe tus pedidos <b>en la puerta de tu casa</b>.
            </Text>
          </Flex>
        </Flex>
        
    </>
  )
}

export default SobreNosotros