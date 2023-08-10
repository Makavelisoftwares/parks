import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <>
      <div className="bg-gray-800 text-white w-1/4 p-4 fixedSidebar">
        <nav>
          <ul>
            <li className="mb-2">
              <Link href={"/"}>Home</Link>
            </li>
           
            {/* Add more sidebar links */}
          </ul>
        </nav>
      </div>
      <div className="flex ml-[15%] p-4 w-[85%]">{children}</div>
    </>
  );
}

export default layout;
