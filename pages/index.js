import Head from "next/head";
import SideBar from "../src/components/SideBar";
import Channelbar from "../src/components/ChannelBar";
import ContentContainer from "../src/components/ContentContainer";
import AreaChartComponent from "../src/components/AreaChart";
import {
  BsFillGiftFill,
  BsFillHeartFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { BiBarChartAlt } from "react-icons/bi";
import PieChartComponent from "../src/components/PieChart";
import TableComponent from "../src/components/Table/TableComponent";

export default function Home() {
  return (
    <div className="home-container">
      <div className="ml-8 mt-3">
        <h1 className="text-gray-600 font-semibold text-2xl dark:text-green-50">
          Analytices
        </h1>
      </div>
      <div className="flex pb-10 justify-evenly">
        <div className=" bg-white dark:bg-slate-800 pt-3 pb-4 pl-2 pr-2  w-3/5 mt-2 shadow-lg rounded-sm p-2">
          <div className="w-full flex justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-gray-500 dark:text-gray-100 text-lg">
                  Dashboard
                </h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                  Overview of Latest Month
                </p>
              </div>

              <SideHeading name={"$3445.84"} text={"Current month earnings"} />
              <SideHeading name={"89"} text={"Current month sales"} />

              <div>
                <h3 className="p-3 bg-green-600 text-white w-full rounded-md mb-2">
                  Last Month Summary
                </h3>
              </div>
            </div>
            <AreaChartComponent />
          </div>
          <div className="mt-1 flex justify-between ">
            <BottomItem
              icon={<BsFillGiftFill size={"23"} color="green" />}
              title={"Wallet Balance"}
              text={"$3445.84"}
            />
            <BottomItem
              icon={<BsFillHeartFill size={"25"} color="purple" />}
              title={"Referral Earning"}
              text={"$3445.84"}
            />
            <BottomItem
              icon={<BsFillCreditCardFill size={"25"} color="#4285F4" />}
              title={"Estimate sales"}
              text={"$3445.84"}
            />
            <BottomItem
              icon={<BiBarChartAlt size={"26"} color="#DB4437" />}
              title={"Earning"}
              text={"$3445.84"}
            />
          </div>
        </div>

        <div className=" bg-white dark:bg-slate-800 pt-3 pb-4 pl-3 pr-3  w-1/3 mt-3 shadow-lg rounded-sm p-2">
          <PieChartComponent />
        </div>
      </div>
      <div className="pl-8 pr-4  pb-10">
        <TableComponent />
      </div>
    </div>
  );
}

const SideHeading = ({ name, text }) => (
  <div className="mb-6">
    <h3 className="text-gray-700 dark:text-white text-xl font-bold">
      {" "}
      {name}{" "}
    </h3>
    <p className="text-[10px] dark:text-gray-400 text-gray-500 font-semibold">
      {" "}
      {text}{" "}
    </p>
  </div>
);

const BottomItem = ({ icon, title, text }) => (
  <div className="mt-2 mr-1 flex items-center shadow-md w-1/4 pl-3 pt-2 pb-2 dark:bg-slate-900">
    <div className="mr-2">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-[15px] dark:text-zinc-50	"> {title} </h3>
      <p className="text-gray-500 text-[12px] dark:text-zinc-300"> {text} </p>
    </div>
  </div>
);
