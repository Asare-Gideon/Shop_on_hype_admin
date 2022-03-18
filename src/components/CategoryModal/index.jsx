import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function CategoryModal({ isModal, setIsModal }) {
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
          <div className="min-h-screen bg-gray-400 dark:bg-slate-900 px-4 ml-16 md:ml-0 text-center">
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
                  Add Category
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex flex-col md:flex-row md:p-2 mb-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none md:mr-3 mb-4 md:mb-0 dark:bg-gray-300 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Category Name"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-col justify-center items-center md:flex-row md:p-2 mb-4">
                    <div>
                      <Image
                        src="/img/img2.jpg"
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label
                        className="bg-green-700 cursor-pointer mr-6 ml-4 mb-4 p-5 hover:bg-green-900 text-gray-100  rounded-full "
                        for="image"
                      >
                        Add image
                      </label>
                      <input type="file" hidden name="image" id="image" />
                    </div>
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
