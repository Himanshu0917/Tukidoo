import { MdOutlineOndemandVideo } from "react-icons/md";
import { useState } from "react";

const data = [
  { icon: <MdOutlineOndemandVideo size="20" />, title: "Classroom", id: 1 },
  { icon: <MdOutlineOndemandVideo size="20" />, title: "WhiteBoard", id: 2 },
  { icon: <MdOutlineOndemandVideo size="20" />, title: "Videos", id: 3 },
  { icon: <MdOutlineOndemandVideo size="20" />, title: "SlideShow", id: 4 },
  { icon: <MdOutlineOndemandVideo size="20" />, title: "Documents", id: 5 },
  { icon: <MdOutlineOndemandVideo size="20" />, title: "Doc.Cam", id: 6 },
];

const NavTag = ({ icon, title, onClick, isActive }) => {
  return (
    <div
      className={`flex space-x-2 cursor-pointer px-8 py-2 ${
        isActive ? "bg-white text-black rounded-full" : ""
      }`}
      onClick={() => onClick(title)}
    >
      <div className="mt-1">{icon}</div>
      <h6 className={`font-medium ${isActive ? "text-black" : ""}`}>{title}</h6>
    </div>
  );
};

const SecondaryNav = () => {
  const [activeNav, setActiveNav] = useState("Videos");

  const handleNavClick = (title) => {
    setActiveNav(title);
  };

  return (
    <div className="flex justify-between mx-10 py-3 bg-gray-300 rounded-full px-5">
      {data?.map(({ icon, title, id }) => (
        <NavTag
          key={id}
          icon={icon}
          title={title}
          onClick={handleNavClick}
          isActive={activeNav === title}
        />
      ))}
    </div>
  );
};

export default SecondaryNav;
