import React from "react";
import Dropdown from "../src/components/Dropdown/Dropdown";
import VendorTable from "../src/components/VendorTable/VendorTable";

function AddUser() {
  const nameArr = [
    { name: "All Users" },
    { name: "Vendors" },
    { name: "Riders" },
  ];

  return (
    <div className="h-full min-h-[95vh]">
      <div>
        <h2 className="text-gray-500 text-center md:text-left text-2xl font-semibold mt-4 dark:text-gray-300 p-2">
          Add Vendor or Rider
        </h2>
        <div>
          <div className="relative flex justify-end mb-2 mt-10">
            <Dropdown items={nameArr} />
          </div>
          <VendorTable />
        </div>
      </div>
    </div>
  );
}

export default AddUser;
