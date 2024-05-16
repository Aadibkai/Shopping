import React from "react";
import { Link } from "react-router-dom";

const App3 = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$100.00",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$120.00",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$80.00",
    },
  ];

  return (
    <div className="bg-gray-100">
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white shadow-md rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">{product.price}</span>
                  <Link
                    to={{
                      pathname: "/YourOrders",
                      state: { productDetails: product },
                    }}
                    className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App3;
