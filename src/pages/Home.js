import { useEffect, useState } from 'react'
import { ChakraProvider, Button, Flex, Heading } from "@chakra-ui/react"
import  { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { app } from "../firebaseConfig"
import useUser from '../hooks/useUser';

const Home = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const { user, setUser } = useUser();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider).then(
            (userCredentials) => {
                setUser(
                    {
                        name: userCredentials.user.displayName,
                        profileImage: userCredentials.user.photoURL
                    }
                )
            }
        ).catch(
            (error) => {
                setErrorMessage(error.message);
            }
        )
    }

    useEffect(() => {
        
    }, [user])    

    return (
        <>
            <header className = "container App-header">
                <h1>Bienvenido/a a Lista de Tareas</h1>
            </header>
            <ChakraProvider>
                <Flex flexWrap="wrap" justifyContent="center" h="30vh" w="auto" m={5}>
                    <div className = "login">
                        <Button colorScheme="teal" variant="solid" size="lg"
                            backgroundColor="#282c34" onClick={handleGoogleLogin}>
                            {user.name ? "Iniciar Sesión con otra cuenta de Google":"Iniciar Sesión con Google"}
                        </Button>
                        {user.name && (
                            <Button colorScheme="teal" variant="outline" size="lg"
                                borderColor="#282c34" onClick={() => {
                                    window.localStorage.removeItem("user");
                                    setUser({});
                                }}>
                                Cerrar sesión
                            </Button>
                        )}
                        
                    </div>
                    {
                        errorMessage && (
                            <Heading as="h3" color="red.600">
                                {errorMessage}
                            </Heading>
                        )
                    }
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default Home