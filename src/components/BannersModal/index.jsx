import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function BannerModal({ isModal, setIsModal }) {
  function closeModal() {
    setIsModal(false);
  }

  return (
    <>
      <Transition appear show={isModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen bg-gray-400 dark:bg-slate-900 px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle dark:bg-slate-800 transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium dark:text-gray-100 leading-6 text-gray-900"
                >
                  Fill user credential below
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex flex-wrap">
                    <div className="max-w-fit mr-6 mb-4 ml-4 relative z-20  ">
                      <Image src="/img/img3.jpg" width={200} height={100} />
                      <button className="bg-green-800 absolute right-0 outline-none top-1 z-44 rounded-full">
                        <AiOutlineCloseCircle color="white" size={23} />
                      </button>
                    </div>
                    <div className="max-w-fit mr-6 ml-4 mb-4 relative z-20  ">
                      <Image src="/img/img3.jpg" width={200} height={100} />
                      <button className="bg-green-800 absolute right-0 outline-none top-1 z-44 rounded-full">
                        <AiOutlineCloseCircle color="white" size={23} />
                      </button>
                    </div>
                    <div className="max-w-fit mr-6 ml-4 mb-4 relative z-20  ">
                      <Image src="/img/img4.jpg" width={200} height={100} />
                      <button className="bg-green-800 absolute right-0 outline-none top-1 z-44 rounded-full">
                        <AiOutlineCloseCircle color="white" size={23} />
                      </button>
                    </div>
                    <label
                      className="bg-green-700 cursor-pointer mr-6 ml-4 mb-4 hover:bg-green-900 text-gray-100 py-2 rounded-md px-5"
                      for="image"
                    >
                      Add image
                    </label>
                    <input type="file" hidden name="image" id="image" />
                  </div>
                </div>

                <div className="mt-10 flex justify-between ">
                  <button
                    type="button"
                    className="inline-flex justify-center  px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-yellow-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Done!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
