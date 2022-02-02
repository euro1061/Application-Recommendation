import React from "react";
import { useNavigate } from "react-router-dom";

const AppItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col shadow-xl group bg-stone-800 rounded-xl relative ${props.hasGap ? "mb-2" : ""}`}>
      <div
        className="opacity-0 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-xl group-hover:opacity-100 transition ease-in-out duration-300 cursor-pointer"
        onClick={() => {
          navigate(`/apps/${props.id}`);
        }}
      ></div>
      <div className="pt-2 pl-2 pr-2">
        <img
          className="rounded-lg"
          width={"100%"}
          src={props.logoApp}
          alt="logoApp"
        />
      </div>
      <div className="p-2">
        <h1 className="text-base font-bold truncate text-white">
          {props.title}
        </h1>
        <p className="text-gray-400 text-sm truncate">{props.developBy}</p>
      </div>
    </div>
  );
};

export default AppItem;
