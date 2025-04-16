
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice';

const sampleProducts = [
  { id: 1, name: 'Sản phẩm 1', price: 100000, image: 'https://picsum.photos/150' },
  { id: 2, name: 'Sản phẩm 2', price: 200000, image: 'https://picsum.photos/150' },
  { id: 3, name: 'Sản phẩm 3', price: 300000, image: 'https://picsum.photos/150' },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {sampleProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-xl shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
          <h3 className="text-xl mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.price} VND</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
