import React, { useState, useEffect } from "react";
import axios from "axios";
const usePagination = (api) => {
  const [datas, setDatas] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPages = Math.ceil(datas.length / itemPerPage);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const data = datas.slice(firstItemIndex, lastItemIndex);

  const fetchData = () => {
    axios.get(api).then((response) => {
      setDatas(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const refreshData = () => {
    fetchData();
  };
  return { totalPages, currentPage, data, handlePageChange, refreshData };
};

export default usePagination;
