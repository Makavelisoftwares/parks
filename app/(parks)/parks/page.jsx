"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; 
import Loadingpage from "@/components/loadingpage"

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [parks, setParks] = useState([]);
  const [loadig, setloadig] = useState(true);

  useEffect(() => {
    const Search = async () => {
      const url =
        "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks";

      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": "1ySNDMb1cUWymHRDaeneQxpM4OPlOZrDc1RTdKb2",
          "X-RapidAPI-Key":
            "433bedc2ffmsh9301e7aee06a196p12e485jsn435d7823cdec",
          "X-RapidAPI-Host":
            "jonahtaylor-national-park-service-v1.p.rapidapi.com",
        },
      };



      try {
        const response = await fetch(url, options);
        // console.log(response.data);
        const data = await response.json();

        setParks(data.data);
        setloadig(false);
        console.log(data.data)
      } catch (error) {
        console.error(error);
      }
    };
    Search();
  }, []);

  const handleSearch = () => {
    const filteredParks = parks.filter((park) =>
      park.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setSearchedParks(filteredParks);
    setParks(filteredParks)
  };

  return (
    <div className="flex h-full w-full ">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="w-full" >
        {/* Navbar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">National Parks Explorer</h1>
          {/* Replace with actual user information */}
          {/* <div className="text-gray-600">Logged in as John Doe</div> */}
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for national parks"
              className="border p-2 w-full rounded-l"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Search
            </button>
          </div>
        </div>

        {!loadig ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {parks.map((park) => (
                <Link href={`/parks/${park.id}`} key={park.id}>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="font-semibold text-lg mb-2">
                      {park.fullName}
                    </h2>
                    <p className="text-gray-600">{park.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center w-[85%] justify-center min-h-screen"><Loadingpage/></div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
