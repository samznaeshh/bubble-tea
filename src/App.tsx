import React from 'react';
import Header from './Home/header';
import Home from './Home/Home';
import Content from './Home/content';
import Catalog from './Home/catalog';
import Footer from './Home/footer';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
