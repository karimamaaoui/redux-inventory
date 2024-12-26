import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UpdateProduct } from './components/updateProduct';
import ProductList from './components/ProductList';
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="products/:id/edit" element={<UpdateProduct />} />
        <Route path="" element={<ProductList />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
