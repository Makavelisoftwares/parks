'use client'
import React, { useEffect } from "react";

function page({ params }) {
  // console.log(params);
  useEffect(() => {
    const Search = async () => {
      const url =
        `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks/${params.id}`;

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

        console.log(data)
        // setParks(data.data);
        // setloadig(false);
        // console.log(data.data)
      } catch (error) {
        console.error(error);
      }
    };
    Search();
  }, []);

  
  return (
    <div>
      {/* <div className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <h2 className="font-semibold text-lg mb-2">{park.fullName}</h2>
        <p className="text-gray-600">{park.description}</p>
      </div> */}
    </div>
  );
}

export default page;
