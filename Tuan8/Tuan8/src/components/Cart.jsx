// src/components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Giỏ hàng</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Giỏ hàng của bạn đang trống!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-6 flex justify-between font-semibold">
            <p>Tổng sản phẩm: {totalQuantity} sản phẩm</p>
            <p>Tổng tiền: {totalPrice} VND</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
