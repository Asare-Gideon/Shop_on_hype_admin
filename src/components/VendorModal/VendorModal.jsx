import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function VendorModal({ isModal, setIsModal }) {
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
                  <div className="flex p-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none mr-3 dark:bg-gray-300 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none dark:bg-gray-300 ml-3 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex p-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      required
                      className="appearance-none mr-3 dark:bg-gray-300 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="First phone number"
                    />
                    <input
                      id="secondPhoneNumber"
                      name="secondPhoneNumber"
                      type="text"
                      required
                      className="appearance-none ml-3 dark:bg-gray-300 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Second Phone Number (optional)"
                    />
                  </div>
                  <div className="flex">
                    <div className="mt-3">
                      <input
                        type="radio"
                        value={"Vendor"}
                        id="vendor"
                        name="users"
                        class="appearance-none cursor-pointer  outline-none focus:ring-0 ml-3 ring-0 indeterminate:bg-gray-300 "
                      />
                      <label
                        for="vendor"
                        className="text-gray-500 dark:text-gray-100 ml-3"
                      >
                        Vendor
                      </label>
                    </div>
                    <div className="mt-3">
                      <input
                        name="users"
                        value={"Rider"}
                        id="rider"
                        type="radio"
                        class="appearance-none cursor-pointer   ml-3 outline-none focus:ring-0 ring-0 indeterminate:bg-gray-300 "
                      />
                      <label
                        for="rider"
                        className="text-gray-500 ml-3 dark:text-gray-100"
                      >
                        Rider
                      </label>
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
