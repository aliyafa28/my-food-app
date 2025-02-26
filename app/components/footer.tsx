"use client";
import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lightPrimary p-8 rounded-2xl my-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/images/logo.png" alt="Elemes Logo" className="mb-4" />
          <p className="text-gray-700">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="bg-primary p-2 rounded-full">
              <Mail className="text-white" />
            </div>
            <div className="bg-primary p-2 rounded-full">
              <Phone className="text-white" />
            </div>
            <div className="bg-primary p-2 rounded-full">
              <Instagram className="text-white" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Cupcake
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Pizza
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Kebab
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Salmon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Doughnut
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">About Us</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Report Problem
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Get now free 50% discount for all products on your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary transition-colors"
            >
              SEND
            </button>
          </form>
          <div className="flex flex-col items-start justify-start space-y-2 mt-4">
            <div className="flex">
              <Mail className="text-primary" />
              <p className="text-gray-600 ml-2">elemesid@gmail.com</p>
            </div>
            <div className="flex">
              <Phone className="text-primary" />
              <p className="text-gray-600 ml-2">0888 1111 2222</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © 2021 ELEMES ID. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
