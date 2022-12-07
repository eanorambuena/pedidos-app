import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { extendTheme, ChakraProvider } from "@chakra-ui/react"

import Menu from './components/Menu';
import Protected from './components/Protected';
import Loading from './pages/Loading';
const Home = React.lazy(() => import('./pages/Home'));
const SobreNosotros = React.lazy(() => import('./pages/SobreNosotros'));
const Tareas = React.lazy(() => import('./pages/Pedidos'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
    const theme = extendTheme({
        colors: {
            brand: {
                0: "white",
                1: "#be1704",
                2: "#ef3620",
                3: "#fa6351",
                4: "#f7a40c",
                5: "#f7bd53"
            },
        },
    })

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Menu/>
                <Routes>
                    <Route path="/" exact element={
                        <Suspense fallback={<Loading/>}>
                            <Home />
                        </Suspense>
                    }/>
                    <Route path = "/nosotros" element={
                        <Suspense fallback={<Loading/>}>
                            <SobreNosotros />
                        </Suspense>
                    }/>
                    <Route path = "/pide" element={
                        <Protected element={
                            <Suspense fallback={<Loading/>}>
                                <Tareas/>
                            </Suspense>
                        }/>
                    }/>
                    <Route path = "/login" element={
                        <Protected element={
                            <Suspense fallback={<Loading/>}>
                                <Login/>
                            </Suspense>
                        }/>
                    }/>
                    <Route path="*" element={
                        <Navigate to="/"/>
                    }/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;