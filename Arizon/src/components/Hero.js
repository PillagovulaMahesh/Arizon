import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-lg text-gray-700">Find the best products at unbeatable prices</p>
      <a href="/products" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Shop Now
      </a>
    </section>
  );
};

export default Hero;
