import React from "react";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { IoMicOutline } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
import { PiWechatLogo } from "react-icons/pi";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaRegShareFromSquare } from "react-icons/fa6";

const data = [
  { icon: <VscDeviceCameraVideo size="27" />, title: "Cam", id: 1 },
  { icon: <IoMicOutline size="30" />, title: "Mic", id: 2 },
  { icon: <FaRegShareFromSquare size="26" />, title: "Share", id: 3 },
  { icon: <PiWechatLogo size="30" />, title: "Chat", id: 4 },
  { icon: <BsBoxArrowRight size="26" />, title: "Leave", id: 5 },
];

const SingleItem = ({ icon, title }) => {
  const isLeaveItem = title === "Leave";

  return (
    <div>
      <div className={`flex flex-col ${isLeaveItem ? "text-white" : ""}`}>
        <button
          className={`rounded-[20px] mx-auto pt-4 h-[60px] w-[60px] flex justify-center ${
            isLeaveItem ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          {icon}
        </button>
      </div>
      <div className="py-2">
        <h6
          className={`text-sm text-center text-medium ${
            isLeaveItem ? "text-black" : ""
          }`}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="h-[180px] relative">
        <img
          src="https://media.istockphoto.com/id/1387323942/photo/smiling-african-american-woman-freelancer-having-video-call-working-online-from-home-young.webp?b=1&s=170667a&w=0&k=20&c=j7St0YxBvwonMNxPFCQkiEmGdTYIyBbY465rJNKDe9M="
          alt=""
          className="rounded-[35px] w-full h-full object-cover"
        />
        <figcaption className="text-sm w-[30%] pl-5 rounded-tr-full rounded-bl-full z-10 h-7 bg-slate-100 bg-opacity-60 ml-0 text-white absolute bottom-0 overfolow-hidden">
          Ridha
        </figcaption>
      </div>

      <div className="h-[180px] relative">
        <img
          src="https://media.istockphoto.com/id/1461432890/photo/camera-point-of-view-of-hispanic-teenager-boy-talking.webp?b=1&s=170667a&w=0&k=20&c=LM3fBEAG4VDLbTwBI6M3NIA7SyZGAJiTjrb2ajW9bmA="
          alt=""
          className="rounded-[35px] w-full h-full object-cover"
        />
        <figcaption className="text-sm w-[40%] pl-5 rounded-tr-full rounded-bl-full z-10 h-7 bg-slate-100 bg-opacity-60 ml-0 text-white absolute bottom-0">
          Ms. Kaur
        </figcaption>
      </div>
      <div className="grid grid-cols-3">
        {data?.map(({ icon, title, id }) => (
          <SingleItem icon={icon} key={id} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Options;
