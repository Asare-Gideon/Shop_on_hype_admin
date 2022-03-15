import Image from "next/image";
import React from "react";
import FeedbackModal from "../FeedbackModal";

function FeedbackTable({ data }) {
  const [isModal, setIsModal] = React.useState(false);
  function openModal() {
    setIsModal(true);
  }
  const myData = {
    headers: ["Name", "Title", "Statu", "Role"],
    body: [
      {
        imgData: {
          name: "John Cooper",
          email: "john33@gmail.com",
          src: "",
        },
        data: {
          title: "Regional Paradigm Technician",
          text: "Optimization",

          role: "Vendor",
        },
        active: "Active",
      },
      {
        imgData: {
          name: "John Cooper",
          email: "john33@gmail.com",
          src: "",
        },
        data: {
          title: "Regional Paradigm Technician",
          text: "Optimization",

          role: "Vendor",
        },
        active: "Active",
      },
      {
        imgData: {
          name: "John Cooper",
          email: "john33@gmail.com",
          src: "",
        },
        data: {
          title: "Regional Paradigm Technician",
          text: "Optimization",
          role: "Vendor",
        },
        active: "Active",
      },
      {
        imgData: {
          name: "John Cooper",
          email: "john33@gmail.com",
          src: "",
        },
        data: {
          title: "Regional Paradigm Technician",
          text: "Optimization",
          role: "Vendor",
        },
        active: "Active",
      },
    ],
  };

  return (
    <div className="vendorModal">
      <FeedbackModal isModal={isModal} setIsModal={setIsModal} />
      <div class="flex flex-col overflow-y-hidden md:overflow-x-hidden overflow-x-visible ">
        <div class="-my-2 overflow-x-visible md:overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow  border-b dark:border-gray-500 border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y dark:divide-gray-500 divide-gray-200">
                <thead class="dark:bg-slate-700 bg-gray-50">
                  <tr>
                    {myData.headers.map((item) => (
                      <Header name={item} />
                    ))}
                    <th
                      scope="col"
                      class=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:bg-slate-800 dark:divide-gray-500 divide-gray-200">
                  {myData.body.map((item) => (
                    <tr>
                      <Body
                        handleModal={openModal}
                        imgData={item.imgData}
                        active={item.active}
                        data={item.data}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = ({ name }) => (
  <th
    scope="col"
    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
  >
    {name}
  </th>
);

const Body = ({ imgData, active, data, handleModal }) => (
  <>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <Image
            height={60}
            width={60}
            class="h-10 w-10 rounded-full"
            alt=""
            src="/img/img1.jpg"
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium dark:text-white text-gray-900">
            {" "}
            {imgData.name}{" "}
          </div>
          <div class="text-sm text-gray-500"> {imgData.email} </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm dark:text-white text-gray-900"> {data.title}</div>
      <div class="text-sm dark:text-gray-500 text-gray-500">{data.text}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full dark:bg-green-800 dark:text-white bg-green-100 text-green-800">
        {" "}
        {active}{" "}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm dark:text-white text-gray-500">
      {data.role}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a
        onClick={handleModal}
        href="#"
        class="text-indigo-600  hover:text-indigo-900"
      >
        View msg
      </a>
    </td>
  </>
);
export default FeedbackTable;
