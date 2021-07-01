import { numericLiteral } from "@babel/types";
import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from "../Navbar/Navbar";
import classes from "./orderHistory.module.css";
import { useHistory } from "react-router";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Footer from '../Footer/Footer';

function OrderHistory(props) {
  const { fetchOrders, orders, fetchMovieDetail, movieDetail, deleteOrder } =
    useContext(movieContext);
  useEffect(() => {
    fetchOrders();
  }, [orders]);
  console.log(orders);
  const history = useHistory();
  const user = JSON.parse(`${localStorage.getItem("user")}`);
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2 style={{ marginBottom: "40px" }}>История брони</h2>
      <h4 style={{ marginBottom: "40px" }}>
        Бронируйте билеты на фильмы и добавляйте их сюда
      </h4>
      {orders.length
        ? orders.map((order) =>
          order.owner === user.email ? (
            <div className={classes.productItem}>
              <div
                onClick={() => history.push(`/movie/${order.movie.id}`)}
                className={classes.productImg}
              >
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "green",
                    width: "40px",
                    height: "30px",
                    borderRadius: "2px",
                  }}
                >
                  <p
                    style={{
                      margin: "0px 5px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {order.movie.age_limit}
                  </p>
                </div>

                <img src={order.movie.image} alt="movieCardImage" />
              </div>
              <div className={classes.productList}>
                <h4>{order.movie.title}</h4>
                <h5>{order.movie.year}</h5>
                <h5>{order.movie.country}</h5>
                <h5>{order.movie.producer}</h5>

                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  {order.movie.descriptions}
                </p>
                <h5>{order.movie.price} сом</h5>
                <HighlightOffIcon
                  onClick={() => {
                    deleteOrder(order.id, order.movie.id);
                    // console.log(order);
                  }}
                  color="primary"
                />

                <p
                  onClick={() => {
                    history.push(`/movie/comments/${order.movie.id}`);
                  }}
                >
                  отзывы
                </p>
              </div>
            </div>
          ) : null
        )
        : null}
      <Footer />
    </div>
  );
}

export default OrderHistory;
