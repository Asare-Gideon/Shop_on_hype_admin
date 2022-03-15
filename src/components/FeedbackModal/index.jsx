import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function FeedbackModal({ isModal, setIsModal }) {
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
          <div className="min-h-screen ml-16 md:ml-0 mr-1 bg-black/50 backdrop-blur-sm px-4 text-center">
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
                  Message
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, sit! Ex impedit recusandae aliquid aperiam, quae
                    fugit, placeat repellendus est, molestiae libero cumque ad
                    neque labore. Officia, pariatur! Illum, exercitationem!
                  </p>
                </div>

                <div className="mt-10 flex justify-between ">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="inline-flex justify-center  px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Alright,got it!
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
