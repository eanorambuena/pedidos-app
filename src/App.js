import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Menu from './components/Menu';
import Protected from './components/Protected';
import Loading from './pages/Loading';
const Home = React.lazy(() => import('./pages/Home'));
const SobreNosotros = React.lazy(() => import('./pages/SobreNosotros'));
const Tareas = React.lazy(() => import('./pages/Tareas'));

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Routes>
        <Route path="/" exact element={
          <Suspense fallback={<Loading/>}><Home /></Suspense>} />
        <Route path = "/sobre-nosotros" element={
          <Suspense fallback={<Loading/>}><SobreNosotros /></Suspense>} />
        <Route path = "/tareas" element={
          <Protected element={
            <Suspense fallback={<Loading/>}>
              <Tareas/>
            </Suspense>
          }/>
        }/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default App;