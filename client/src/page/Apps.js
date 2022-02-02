import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppItem from "../components/AppItem";
import LeftMain from "../components/LeftMain";
import { getOne } from "../lib/api";

const Apps = () => {
  const { id } = useParams();
  const [app, setApp] = useState({});
  const [loadingApp, setLoadingApp] = useState(false);
  const [listRecommeds, setListRecommends] = useState([]);
  useEffect(() => {
    setLoadingApp(true);
    getOne(id).then((data) => {
      setApp(data[0].data);
      setLoadingApp(false);
      setListRecommends(JSON.parse(data[1].recom));
    });
  }, [id]);
  return (
    <div className="container px-10 mb-10 md:px-0 max-w-6xl mx-auto -mt-44 sm:-mt-28 lg:-mt-44">
      <div className="grid grid-cols-10 gap-3">
        <div className="bg-white lg:col-span-8 col-span-10 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-xl shadow-xl p-5">
          {loadingApp && <p className="text-3xl">Loading...</p>}
          {!loadingApp && (
            <LeftMain
              title={app.title}
              genre={app.genre}
              developBy={app.developBy}
              logoApp={app.logoApp}
              rating={app.rating}
              price={app.price}
              description={app.description}
              url={app.Url}
            />
          )}
        </div>
        <div className="bg-white lg:col-span-2 col-span-10 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-xl shadow-xl p-5">
          <h1 className="text-xl font-bold mb-5 border-b-2 border-gray-400 pb-3">
            สิ่งที่คุณอาจสนใจ
          </h1>
          {loadingApp && <p className="text-xl">Loading...</p>}
          {!loadingApp &&
            listRecommeds.length > 0 &&
            listRecommeds.map((list) => (
              <AppItem
                key={list.id}
                logoApp={list.logoApp}
                title={list.title}
                developBy={list.developBy}
                id={list.id}
                hasGap={true}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
