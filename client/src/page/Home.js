import React, { useEffect, useState } from "react";
import AppItem from "../components/AppItem";
import { getAll } from "../lib/api";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAll().then((data) => {
      setLists(data);
      setLoading(false);
    });
  }, []);

  const usersPerPage = 25;
  const pageVisited = pageNumber * usersPerPage;

  const displayApps = lists
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((list) => {
      return (
        <AppItem
          key={list.id}
          logoApp={list.logoApp}
          title={list.title}
          developBy={list.developBy}
          id={list.id}
        />
      );
    });

  const pageCount = Math.ceil(lists.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container px-10 mb-10 md:px-0 max-w-6xl mx-auto -mt-44 sm:-mt-28 lg:-mt-44">
      <div className="bg-white w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-xl shadow-xl p-5">
        {!loading && <h1 className="text-center text-3xl mb-5 border-b-2 border-gray-400 pb-3"><i className="fas fa-th-list"></i> List Applications</h1>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {loading && <p className="text-white text-3xl">Loading...</p>}
          {!loading && displayApps}
          {!loading && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "flex items-center space-x-1 mt-4 text-lg w-full flex-end"
              }
              previousLinkClassName={
                "flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
              }
              pageLinkClassName={
                "px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-green-400 hover:text-white"
              }
              nextLinkClassName={
                "flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
              }
              breakClassName={
                "px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-green-400 hover:text-white"
              }
              activeLinkClassName={"bg-green-400"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
