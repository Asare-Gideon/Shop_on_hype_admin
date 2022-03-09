import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";

function VendorTable({ data }) {
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
        },
        active: "Active",
      },
    ],
  };

  return (
    <div>
      <div class="flex flex-col ">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow  overflow-hidden border-b dark:border-gray-500 border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y dark:divide-gray-500 divide-gray-200">
                <thead class="dark:bg-slate-700 bg-gray-50">
                  <tr>
                    {myData.headers.map((item) => (
                      <Header name={item} />
                    ))}
                    <th
                      scope="col"
                      class=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-white bg-green-600 px-4 py-1  hover:text-gray-400"
                      >
                        Add
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:bg-slate-800 dark:divide-gray-500 divide-gray-200">
                  {myData.body.map((item) => (
                    <tr>
                      <Body
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

const Body = ({ imgData, active, data }) => (
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
      Admin
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600  hover:text-indigo-900">
        Edit
      </a>
    </td>
  </>
);
export default VendorTable;
