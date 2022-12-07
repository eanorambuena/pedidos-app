import { Flex, Heading } from "@chakra-ui/react";

const Header = ({children, ...rest}) => {
    return (
        <Flex backgroundColor="brand.2" w="100%" h={100} 
        alignItems="center" {...rest}>
            <Heading as="h1" fontSize={30} textAlign="center" width="100%"
                color="brand.0" fontWeight={500} mx={7}>
                {children}
            </Heading>
        </Flex>
    );
}
 
export default Header;