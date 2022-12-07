import { useEffect, useState } from 'react'
import { Button, Flex, Heading } from "@chakra-ui/react"
import  { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { app } from "../firebaseConfig"
import useUser from '../hooks/useUser';
import Header from '../components/Header';

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
            <Header>Bienvenid@ a Pedidos App</Header>
            <Flex flexWrap="wrap" justifyContent="center" h="30vh" w="auto" m={5}>
                <div className = "login">
                    <Button backgroundColor="brand.2" color="brand.0" variant="solid" size="lg" onClick={handleGoogleLogin}>
                        {user.name ? "Cambiar de cuenta de Google":"Iniciar Sesión con Google"}
                    </Button>
                    {user.name && (
                        <Button borderColor="brand.2" color="brand.2" backgroundColor="brand.0"
                            variant="outline" size="lg" onClick={() => {
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
        </>
    );
}

export default Home