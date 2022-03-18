import React from "react";
import CategoryTable from "../src/components/CategoryTable";

function Categories() {
  return (
    <div className="h-full min-h-[95vh]">
      <div>
        <h2 className="text-gray-500 text-center md:text-left text-2xl font-semibold mt-4 dark:text-gray-300 p-2">
          Categories
        </h2>
        <div>
          <CategoryTable />
        </div>
      </div>
    </div>
  );
}

export default Categories;
