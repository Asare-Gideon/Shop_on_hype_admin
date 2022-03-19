import React from "react";
import Dropdown from "../src/components/Dropdown/Dropdown";
import FeedbackModal from "../src/components/FeedbackModal";

function Notification() {
  const [isModal, setIsModal] = React.useState(false);
  function openModal() {
    setIsModal(true);
  }

  return (
    <div className="min-h-[94vh]">
      <h3 className="text-center text-2xl mt-3 dark:text-white">Notifications</h3>
      {/** message modals */}
      <FeedbackModal isModal={isModal} setIsModal={setIsModal} />

      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg py-2 px-3 mt-4  max-w-3xl">
          <h3 className="text-lg text-gray-500 dark:text-gray-200">22/12/3030</h3>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repellat....</p>
            <button onClick={openModal} className="mt-2 text-lg text-green-600">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
