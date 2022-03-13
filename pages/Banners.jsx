import Image from "next/image";
import React from "react";
import BannerSlider from "../src/components/BannerSlider";
import BannerModal from "../src/components/BannersModal";
import Disclose from "../src/components/Disclose";
import TextEditor from "../src/components/TextEditor";

function Banners() {
  const [isModal, setIsModal] = React.useState(false);
  const openModal = () => {
    setIsModal(true);
  };
  return (
    <div className="min-h-[95vh]  pb-11">
      <div>
        <h2 className="text-gray-500 text-2xl font-semibold mt-4 dark:text-gray-300 p-2">
          Update Banners
        </h2>
      </div>

      <div>
        <BannerModal isModal={isModal} setIsModal={setIsModal} />
      </div>
      <div className="flex">
        <div className="w-full pl-3 pr-3">
          <BannerSlider />
        </div>
      </div>
      <div className="flex justify-between pr-2 mt-4 mb-2">
        <button
          onClick={openModal}
          className="px-4 outline-none py-2 ml-3 bg-green-700 text-gray-100 rounded-md hover:bg-green-900 shadow-md"
        >
          Edit Banner images
        </button>
      </div>
      <div className="mt-5 flex justify-between p-4">
        <TextEditor />
        <Disclose />
      </div>
    </div>
  );
}
export default Banners;
