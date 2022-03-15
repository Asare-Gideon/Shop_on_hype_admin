import React from "react";
import Dropdown from "../src/components/Dropdown/Dropdown";
import FeedbackTable from "../src/components/FeedbackTable";

function Feedback() {
  const nameArr = [
    { name: "All" },
    { name: "User" },
    { name: "Riders" },
    { name: "Vendors" },
  ];

  return (
    <div className="h-full min-h-[95vh]">
      <div>
        <h2 className="text-gray-500 text-center md:text-left text-2xl font-semibold mt-4 dark:text-gray-300 p-2">
          All Feedbacks
        </h2>
        <div>
          <div className="relative flex justify-end mb-2 mt-10">
            <Dropdown items={nameArr} />
          </div>
          <FeedbackTable />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
