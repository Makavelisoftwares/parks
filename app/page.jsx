import React from "react";
import Link from "next/link"; // Make sure you have React Router installed

function WelcomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="w-full p-4">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Welcome to National Parks</h1>
          {/* Replace with actual user information */}
          <div className="text-gray-600 flex space-x-2">
            <Link href={'/login'}>Sign In</Link>
            <Link href={'/register'}>Sign Up</Link>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">
            Explore the Beauty of Nature
          </h2>
          <p className="text-gray-600">
            Discover stunning national parks and wildlife reserves that showcase
            the wonders of our natural world.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {/* Replace the image URLs with actual park images */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1547974996-050bf23b6196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 1"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://images.unsplash.com/photo-1513367661846-34cad8be646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80"
              alt="Park 2"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1526008625783-ddfc11a3a962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 3"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1606859310697-996d3022b8c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 4"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {/* Replace the image URLs with actual park images */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1547974996-050bf23b6196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 1"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://images.unsplash.com/photo-1513367661846-34cad8be646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80"
              alt="Park 2"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1526008625783-ddfc11a3a962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 3"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
            src="https://images.unsplash.com/photo-1606859310697-996d3022b8c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdGlvbmFsJTIwcGFya3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Park 4"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
