import TopNavigation from "../TopNavigation";
import SecondaryNav from "../TopNavigation/SecondaryNav";
import Options from "./Options";
import VideoContainer from "./VideoContainer";
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <SecondaryNav />
      <div className="flex justify-between mx-10 py-3 px-5 space-x-5">
        <div className="w-[20%]">
          <Options />
        </div>
        <div className="w-[80%]">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
