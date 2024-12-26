import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../features/inventory/inventorySlice';
import { useNavigate } from 'react-router';

const ProductList = () => {
  const products = useSelector((state) => state.inventory.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };
 
  const handleUpdate = (id) => {
    //dispatch(updateProduct({ id }));
    navigate(`/products/${id}/edit`);
  };
 
 
 
  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}- {product.quantity} unités ${product.price}
            <button onClick={() => handleDelete(product.id)}>Supprimer</button>

            <button onClick={() => handleUpdate(product.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
