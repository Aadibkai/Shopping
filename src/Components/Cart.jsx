import React from 'react';

function Cart() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Your cart items go here */}
        Example cart item:
        <div className="bg-white p-4 shadow-md rounded-md">
          <img src="image-url" alt="Product" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2">Product Name</h3>
          <p className="text-gray-700">Price: $XX.XX</p>
          <p className="text-gray-700">Quantity: 1</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Remove</button>
        </div>
       
      </div>
    </div>
  );
}

export default Cart;
