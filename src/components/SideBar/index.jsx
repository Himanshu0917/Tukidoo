import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaRegBell } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { MdOutlineGroup } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GoStopwatch } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="top-0 left-0 h-screen w-16 flex flex-col justify-around items-center bg-white dark:bg-gray-900 shadow-lg">
      <div>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://t3.ftcdn.net/jpg/04/06/91/94/360_F_406919447_kAcC5gdh1rpYlVxwMfHtUTGf24PUYSq8.jpg"
          alt=""
        />
      </div>
      <div className="space-y-8">
        {/* <SideBarIcon icon={<FaRegBell size="24" />} /> */}
        <SideBarIcon icon={<HiBars3CenterLeft size="24" />} />
        <SideBarIcon icon={<FaRegBell size="24" />} />
        <SideBarIcon icon={<GoStopwatch size="24" />} />
        <SideBarIcon icon={<LuClipboardCheck size="24" />} />
        <SideBarIcon icon={<RxEyeOpen size="24" />} />
        <SideBarIcon icon={<MdOutlineGroup size="24" />} />
        <SideBarIcon icon={<RiBarChartFill size="24" />} />
      </div>
      <div>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className="mx-auto">{icon}</div>;

// const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
