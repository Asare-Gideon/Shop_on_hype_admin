import { BsPlus, BsFillLightningFill, BsGearFill, BsFillBarChartLineFill} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg z-[80]">
                    
        <SideBarIcon text={"Analytic Screen"} icon={<BsFillBarChartLineFill size="20" />} />
        <Divider />
        <SideBarIcon text={"Add Vendor or Rider"} icon={<BsPlus size="32" />} />
        <SideBarIcon  icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon text={"Settings"} icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text}) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
