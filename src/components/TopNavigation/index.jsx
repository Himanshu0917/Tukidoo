import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";

const NavButtons = ({ icon, text, background, customClass }) => {
  return (
    <div className={`${customClass} flex space-x-2 `}>
      <div className={`${background} mt-1 mx-auto`}>{icon}</div>
      <div className="text-[14px] mt-1 font-medium">{text}</div>
    </div>
  );
};

const TopNavigation = () => {
  return (
    <div className="flex justify-between mx-10 pl-3 pr-6 py-3">
      <div className="flex space-x-5">
        <button className="flex justify-center bg-gray-300 rounded-lg py-2 px-4">
          <IoChevronBackOutline size="20" />
        </button>
        <h3 className="font-bold text-2xl">Basic Mathematics 101</h3>
      </div>
      <div className="flex space-x-4 mt-1">
        <NavButtons
          icon={<FaPhoneAlt size="20" />}
          text="Call Teacher"
          // background="bg-[#C2DFFF]"
        />
        <NavButtons icon={<FaUserCircle size="24" />} text="Support" />
      </div>
    </div>
  );
};

export default TopNavigation;
