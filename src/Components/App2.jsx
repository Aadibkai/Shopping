import React from "react";
import { Link } from "react-router-dom";

const App2 = () => {
  const productDetails = [
    {
      id: 2,
      name: "Casual Wear",
      description: "Comfortable and trendy clothing",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$80.00",
    },
    {
      id: 3,
      name: "Formal Attire",
      description: "Elegant and sophisticated outfits",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$150.00",
    },
    {
      id: 4,
      name: "Sportswear",
      description: "Stylish and functional sportswear",
      imageUrl: "https://via.placeholder.com/400x300",
      price: "$100.00",
    },
  ];

  return (
    <div>
      <section id="featured-categories" className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productDetails.map((product) => (
            <div
              key={product.id}
              className="category-card shadow-md rounded-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-md transition-transform hover:scale-105 animate-fade-in"
              />
              <div className="p-4 flex flex-col justify-between items-center bg-white rounded-b-md transition-transform hover:-translate-y-2">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <span className="text-gray-900 font-semibold">{product.price}</span>
                  <Link
                    to={{
                      pathname: "/YourOrders",
                      state: { productDetails: product },
                    }}
                    className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
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

export default App2;
