import React from 'react'

import { Flex } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="50%" w="100%"
      color="brand.fg2" backgroundColor="brand.bg2">
        <h1>Cargando...</h1>
    </Flex>
  )
}

export default Loading