import axios from "axios";
import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

const INIT_STATE = {
  movies: [],
  menuItems: [],
  movieDetail: null,
  total: 0,
  orderHistory: {},
  favorite: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload.data,
        total: action.payload.total,
      };
    case "SET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((product) => product.id !== action.payload),
      };
    case "CLEAR_MOVIE":
      return {
        ...state,
        movieDetail: null,
      };

    case "SET_MENUITEMS":
      return {
        ...state,
        menuItems: action.payload,
      };

    case "GET_ORDERHISTORY":
      return {
        ...state,
        cart: action.payload,
      };
    case "GET_FAVORITE":
      return {
        ...state,
        favorite: action.payload,
      };

    default:
      return state;
  }
};

export const movieContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchMovies = async (page = 0) => {
    try {
      const response = await axios.get(
        `${URL}/movies?_start=${page * 3}&_end=${3 * (page + 1)}`
      );
      const movies = response.data;
      const total = response.headers["x-total-count"];

      dispatch({
        type: "SET_MOVIES",
        payload: {
          data: movies,
          total,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSearchMovies = async (value) => {
    const response = await axios.get(`${URL}/movies/?q=${value}`);
    const movies = response.data;

    const total = response.headers["x-total-count"];

    dispatch({
      type: "SET_MOVIES",

      payload: {
        data: movies,
        total,
      },
    });
  };

  const fetchMovieDetail = async (id) => {
    const response = await axios.get(`${URL}/movies/${id}`);
    const movieDetail = response.data;
    console.log(movieDetail);
    dispatch({
      type: "SET_MOVIE_DETAIL",
      payload: movieDetail,
    });
  };

  const createMovie = async (movie) => {
    const response = await axios.post(
      "http://35.234.80.217/api/v1/movie/create",
      movie
    );
    const createdMovie = response.data;

    dispatch({
      type: "ADD_MOVIE",
      payload: createdMovie,
    });

    return createdMovie.id;
  };

  // const createProduct = async (product) => {
  //   const response = await axios.post(`${URL}/products`, product);
  //   const createdProduct = response.data;

  //   dispatch({
  //     type: "ADD_PRODUCT",
  //     payload: createdProduct,
  //   });

  //   return createdProduct.id;
  // };

  const deleteMovie = async (id) => {
    await axios.delete(`${URL}/movies/${id}`);
    dispatch({
      type: "REMOVE_MOVIE",
      payload: id,
    });
  };

  const updateMovie = async (id, data) => {
    await axios.patch(`${URL}/movies/${id}`, data);
    dispatch({
      type: "CLEAR_MOVIE",
    });
  };
  const fetchMenuItems = async () => {
    const response = await axios.get(`${URL}/menuItems`);
    const menuItems = response.data;
    dispatch({
      type: "SET_MENUITEMS",
      payload: menuItems,
    });
  };

  const getOrderHistory = () => {
    let orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (!orderHistory) {
      orderHistory = {
        movies: [],
        totalPrice: 0,
      };
    }
    dispatch({ type: "GET_ORDERHISTORY", payload: orderHistory });
  };
  const addMovieToOrderHistory = (movie) => {
    console.log(movie);
    let orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (!orderHistory) {
      orderHistory = {
        movies: [],
        totalPrice: 0,
      };
    }
    //     const saveToCartBtn = (id) => `<button onclick="saveProductToCart(this)" class="btn btn-success" data-id="${id}">
    //     <img src="./assets/icons/cart.png" alt="cart-icon">
    //     </button>`;

    // const rmvFromCartBtn = (id) => `<button onclick="rmvProductFromCart(this)" class="btn btn-danger" data-id="${id}">
    // <img src="./assets/icons/cart.png" alt="cart-icon">
    // </button>`;

    let newMovie = {
      item: movie,
      count: 1,
      subPrice: 0,
    };

    //если кликнутый продукт есть в корзине, то удаляем, а если нет то пушим
    let filteredOrderHistory = orderHistory.movies.filter(
      (elem) => elem.item.id === movie.id
    );
    if (filteredOrderHistory.length > 0) {
      orderHistory.movies = orderHistory.movies.filter(
        (elem) => elem.item.id !== movie.id
      );
    } else {
      orderHistory.movies.push(newMovie);
    }

    newMovie.subPrice = calcSubPrice(newMovie);
    orderHistory.totalPrice = calcTotalPrice(orderHistory.movies);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  };
  const changeMovieCount = (count, id) => {
    let orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    orderHistory.movies = orderHistory.movies.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    orderHistory.totalPrice = calcTotalPrice(orderHistory.movies);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
    getOrderHistory();
  };

  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
      };
    }
    dispatch({ type: "GET_FAVORITE", payload: favorite });
  };
  const addProductToFavorite = (movie) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        movies: [],
      };
    }

    let newMovie = {
      item: movie,

      subPrice: 0,
    };

    //если кликнутый продукт есть в корзине, то удаляем, а если нет то пушим
    let filteredFavorite = favorite.movies.filter(
      (elem) => elem.item.id === movie.id
    );
    if (filteredFavorite.length > 0) {
      favorite.movies = favorite.movies.filter(
        (elem) => elem.item.id !== movie.id
      );
    } else {
      favorite.movies.push(newMovie);
    }

    newMovie.subPrice = calcSubPrice(newMovie);

    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        total: state.total,
        movieDetail: state.movieDetail,
        menuItems: state.menuItems,
        fetchMovies,
        fetchMovieDetail,
        createMovie,
        deleteMovie,
        updateMovie,
        fetchSearchMovies,
        fetchMenuItems,
        getFavorite,
        addProductToFavorite,
        favorite: state.favorite,
        getOrderHistory,
        addMovieToOrderHistory,
        changeMovieCount,
        orderHistory: state.orderHistory,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
}
