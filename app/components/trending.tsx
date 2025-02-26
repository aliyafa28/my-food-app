"use client";
import React from "react";

export default function Trending() {
  // Daftar resep trending
  const trendingRecipes = [
    {
      name: "Pizza Paperoni",
      category: "Pizza",
      rating: 4,
      image: "/images/paperoni.png",
    },
    {
      name: "Pizza Meat",
      category: "Pizza",
      rating: 3,
      image: "/images/meat.png",
    },
    {
      name: "Doner Kebab",
      category: "Kebab",
      rating: 5,
      image: "/images/doner.png",
    },
    {
      name: "Salmon Roll",
      category: "Salmon",
      rating: 4,
      image: "/images/salmonrolls.png",
    },
    {
      name: "Cupcake Choco",
      category: "Cupcake",
      rating: 4,
      image: "/images/chococup.png",
    },
    {
      name: "Doughnut Milk",
      category: "Doughnut",
      rating: 5,
      image: "/images/milkdonut.png",
    },
    {
      name: "Doughnut Unicorn",
      category: "Doughnut",
      rating: 4,
      image: "/images/unicorn.png",
    },
    {
      name: "Kathi Kebab",
      category: "Kebab",
      rating: 4,
      image: "/images/kathi.png",
    },
  ];

  // Array warna background yang akan digunakan
  const backgroundColors = [
    "bg-lightPrimary",
    "bg-lightSecondry",
    "bg-lightAccent",
    "bg-lightDenger",
    "bg-lightSucces",
  ];

  const getStarRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800 ml-8 sm:ml-40">
        Browse Our Trending
      </h2>
      <h2 className="text-3xl font-bold text- mb-left 6 text-primary ml-8 sm:ml-40">
        Receipt
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
        {trendingRecipes.map((recipe, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-md p-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl ${
              backgroundColors[index % backgroundColors.length] // Menggunakan warna secara berurutan
            }`}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {recipe.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{recipe.category}</p>
            <div className="flex items-center">
              <div className="flex">{getStarRating(recipe.rating)}</div>
              {/* <p className="ml-2 text-sm text-gray-600">({recipe.rating})</p> */}
            </div>
          </div>
        ))}
      </div>
      {/* Tombol All Recipes */}
      <div className="flex justify-center mt-8 hidden sm:flex">
        <button className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-primary transition-colors duration-300">
          All Recipes
        </button>
      </div>
    </div>
  );
}
