import React from 'react';
import { useLocation } from 'react-router-dom';

const YourOrdersPage = () => {
  const location = useLocation();
  const { productDetails } = location.state || {}; 
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      {productDetails ? (
        <div className="bg-white shadow-md rounded my-6">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{productDetails.name}</h3>
            <p className="text-gray-700">{productDetails.description}</p>
            <img
              src={productDetails.imageUrl}
              alt={productDetails.name}
              className="w-full h-auto mt-4"
            />
            <p className="mt-4">Price: {productDetails.price}</p>
          </div>
        </div>
      ) : (
        <p>No product details available</p>
      )}
    </div>
  );
};

export default YourOrdersPage;
