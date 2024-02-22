import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { GrView } from "react-icons/gr";

const Card = (props) => {
  console.log(props);
  return (
    <div className="border-2 border-gray-300 rounded-lg flex flex-col md:flex-row w-full md:w-[80%] mx-auto md:mx-0">
      <div className="p-4 md:p-14">
        <img
          className="w-16 h-16 md:w-[50px] md:h-[50px] rounded-full"
          src="https://miro.medium.com/v2/resize:fit:1400/1*MxZpRFN3hnZrCC05s1q73A.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 py-3 px-4 md:px-8 w-full">
        <div className="md:flex md:justify-between">
          <h1 className="font-bold text-xl md:text-2xl">
            {props.value.Job_Title}
          </h1>
          <h1 className="md:hidden">{props.value.company_name}</h1>
        </div>
        <div>
          <div>
            Degree:{" "}
            <span className="text-gray-500">{props.value.Degree}</span>
          </div>
          <div>
            Batch:{" "}
            <span className="text-gray-500">{props.value.Batch}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-blue-200 text-blue-800 h-7 px-4 text-sm rounded-md">
            Fulltime
          </div>
          <div className="flex items-center bg-green-100 text-green-800 h-7 px-3 text-sm rounded-md">
            {" "}
            <MdLocationPin className="mr-1" /> Bangalore
          </div>
          <div className="flex items-center bg-violet-300 text-violet-800 h-7 px-3 text-sm rounded-md">
            <IoTime className="mr-1" />
            0-3 years
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 text-gray-500 mt-2">
          <GrView />
          <div>123123 views</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
