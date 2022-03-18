import Link from "next/link";
import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsFillBarChartLineFill,
  BsHddStack,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white overflow-visible dark:bg-gray-900 shadow-lg z-[80]"
    >
      <SideBarIcon
        text={"Analytic Screen"}
        icon={<BsFillBarChartLineFill size="20" />}
        url={"/"}
      />
      <Divider />
      <SideBarIcon
        url={"/AddUser"}
        text={"Add Vendor or Rider"}
        icon={<BsPlus size="32" />}
      />
      <SideBarIcon
        text={"Banners and logos Updates"}
        url={"/Banners"}
        icon={<BsHddStack size="20" />}
      />
      <SideBarIcon
        text={"Feedback"}
        url={"/Feedback"}
        icon={<RiFeedbackFill size="20" />}
      />
      <Divider />
      <SideBarIcon
        url={"/Categories"}
        text={"Categories"}
        icon={<MdCategory size="22" />}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text, url }) => (
  <Link href={url ? url : ""}>
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
