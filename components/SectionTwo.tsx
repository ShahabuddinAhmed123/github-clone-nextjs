import React from "react";

const SectionTwo = () => {
  return (
    <div className="w-full h-auto pt-32 bg-[#0b0f1e] text-[#ffffffd9] relative flex flex-col gap-0">
      <div className="w-[770px] mx-auto h-auto flex flex-col gap-5 text-center">
        <h1 className="text-5xl font-bold">Accelerate performance</h1>
        <p className="text-2xl">
          With GitHub Copilot embedded throughout the platform, you can simplify
          your toolchain, automate tasks, and improve the developer experience
        </p>
      </div>
      <img
        src="/particles.png"
        className="absolute top-0 w-[512px] left-1/2 z-10 transform translate-x-[-50%]"
        alt=""
      />
        <div className="shadow mx-auto">
  <div className="triangle-wrapper">
    <div className="triangle">
      <p>Todrick</p>
    </div>
  </div>
</div>
      <div className="w-full h-20"></div>
      <div className="w-[1250px] z-50 backdrop-blur-[1px] rounded-3xl border-gray-500 px-24 h-[650px] flex items-center justify-center border mx-auto">
        <div className="w-fit h-full flex items-center backdrop-blur-lg">
        <div className="w-fit p-2 mx-auto rounded-3xl bg-[#8c00ff33] ">
        <video
        className="w-[452px] rounded-3xl"
          src="https://github.githubassets.com/assets/hero_desktop-4dc318ea1962.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
        ></video>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
