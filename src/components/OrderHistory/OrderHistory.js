import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContext";

function OrderHistory(props) {
  const { fetchOrders, orders, fetchMovieDetail, movieDetail } =
    useContext(movieContext);
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      {/* {orders.map((order)=>(
           
      ))} */}
    </div>
  );
}

export default OrderHistory;
