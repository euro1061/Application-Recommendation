import React from "react";
import { Link } from 'react-router-dom'

const LeftMain = (props) => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold mb-5 border-b-2 border-gray-400 pb-3">
        <Link to={'/'} className="bg-blue-600 hover:bg-white transition duration-500 ease-in-out hover:border-blue-600 hover:text-blue-600 text-white px-2 rounded-lg">
          <i className="fas fa-home"></i>
        </Link>
        &nbsp;
         {props.title}
      </h1>
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-10 md:col-span-3 lg:col-span-3">
          <img
            width={"100%"}
            className="rounded-3xl"
            src={props.logoApp}
            alt="logoApp"
          />
          <button
            className="px-2 py-2 bg-green-600 hover:bg-green-800 transition duration-300 ease-in-out text-white w-full mt-3 rounded-md"
            onClick={() => {
              window.open(props.url, "_blank").focus();
            }}
          >
            <i className="fab fa-google-play"></i> ดาวห์โหลด
          </button>
          <p className="mt-4 text-xl mb-2 font-bold">รายละเอียด</p>
          <ul className="text-sm">
            <li>
              <p>ประเภท : {props.genre}</p>
            </li>
            <li>
              <p>พัฒนาโดย : {props.developBy}</p>
            </li>
            <li>
              <p>
                คะแนน : {props.rating}{" "}
                <i className="fas fa-star text-yellow-500"></i>
              </p>
            </li>
            <li>
              <p>ราคา : {props.price}</p>
            </li>
          </ul>
        </div>
        <div className="col-span-7">
          <h1 className="text-xl font-bold">คำอธิบาย</h1>
          <p className="text-sm mt-2">{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftMain;
