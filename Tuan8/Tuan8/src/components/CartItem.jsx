// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div className="ml-4">
          <p className="text-lg">{item.name}</p>
          <p className="text-sm text-gray-600">{item.price} VND</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded-md"
        />
        <p className="font-semibold">{item.quantity * item.price} VND</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 transition duration-300"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}

export default CartItem;
