import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Accessory 1",
    description: "Description of Accessory 1",
    imageUrl: "https://via.placeholder.com/400x300",
    price: "$10",
  },
  {
    id: 2,
    name: "Accessory 2",
    description: "Description of Accessory 2",
    imageUrl: "https://via.placeholder.com/400x300",
    price: "$15",
  },
  {
    id: 3,
    name: "Accessory 3",
    description: "Description of Accessory 3",
    imageUrl: "https://via.placeholder.com/400x300",
    price: "$20",
  },
];

export default function App4() {
  return (
    <div className="bg-gray-100">
      <section id="hijab-accessories" className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Hijab Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="accessory-card bg-white shadow-md rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
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
                  <button className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                    <Link
                      to={{
                        pathname: "/YourOrders",
                        state: { productDetails: product },
                      }}
                      className="block w-full h-full"
                    >
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
