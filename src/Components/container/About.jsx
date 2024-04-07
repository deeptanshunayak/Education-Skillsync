import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          Skill Sync is based on formalized learning, it is provided through electronic devices such as computers, tablets, and even cellular phones that are connected to the internet. This makes it easy for users to learn anytime, anywhere, with few, if any, restrictions. Basically, Skill Sync is training, learning, or education delivered online through a computer or any other digital device.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;