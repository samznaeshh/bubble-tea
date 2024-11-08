import React from 'react';
import Header from './foot-head/header';
import Home from './pages/Home';
import Auth from './pages/auth';
import Registration from './pages/registration';
import Content from './home-content/content';
import Catalog from './pages/catalog';
import Footer from './foot-head/footer';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
