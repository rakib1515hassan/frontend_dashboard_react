'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} item(s) to the cart`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="product-image">
          <img
            src="/products/product_1.jpg"
            alt="Product Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="text-3xl font-bold text-gray-800">Product Name</h1>
          <p className="text-lg text-gray-500 mt-2">Category: Electronics</p>
          
          <div className="price-section mt-4">
            <span className="text-xl font-semibold text-green-600">$99.99</span>
            <p className="text-md text-gray-500 line-through mt-1">$149.99</p>
          </div>
          
          <p className="mt-4 text-gray-700">
            This is a brief product description. It explains the features and benefits of the product.
            You can add multiple lines of description here, detailing key aspects that make the product stand out.
          </p>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center">
            <div className="flex items-center border rounded-md">
              <button
                className="px-4 py-2 text-xl text-gray-600"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="px-4 py-2 text-xl text-gray-800">{quantity}</span>
              <button
                className="px-4 py-2 text-xl text-gray-600"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="ml-6 px-8 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Add to Cart
            </button>
          </div>
          
          {/* Additional Links */}
          <div className="mt-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
