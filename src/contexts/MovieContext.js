import axios from "axios";
import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
// import LocalStorageService from "../helpers/LocalStorageService";
// // LocalstorageService
// const localStorageService = LocalStorageService.getService();

// // Add a request interceptor
// axios.interceptors.request.use(
//    config => {
//        const token = localStorageService.getAccessToken();
//        if (token) {
//            config.headers['Authorization'] = 'Token ' + token;
//        }
//        // config.headers['Content-Type'] = 'application/json';
//        return config;
//    },
//    error => {
//        Promise.reject(error)
//    });

// //Add a response interceptor

// axios.interceptors.response.use((response) => {
//    return response
// }, function (error) {
//    const originalRequest = error.config;

//    if (error.response.status === 401 && originalRequest.url ===
// 'http://35.234.80.217/api/v1/accounts/token/refresh/') {
//        router.push('/login');
//        return Promise.reject(error);
//    }

//    if (error.response.status === 401 && !originalRequest._retry) {

//        originalRequest._retry = true;
//        const refreshToken = localStorageService.getRefreshToken();
//        return axios.post('/auth/token',
//            {
//                "refresh_token": refreshToken
//            })
//            .then(res => {
//                if (res.status === 201) {
//                    localStorageService.setToken(res.data);
//                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
//                    return axios(originalRequest);
//                }
//            })
//    }
//    return Promise.reject(error);
// });

const INIT_STATE = {
  movies: [],
  menuItems: [],
  movieDetail: null,
  total: 0,
  orderHistory: {},
  favorite: [],
  genres: [],
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload.data,
        total: action.payload.total,
      };
    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload.data,
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
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
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
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};

export const movieContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchMovies = async (page) => {
    try {
      const response = await axios.get(
        `http://35.234.80.217/api/v1/movie/?page=${page}`
      );
      console.log(response.data.results);
      const movies = response.data.results;
      const total = response.data.count;
      // console.log(movies);
      console.log(movies);
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
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://35.234.80.217/api/v1/comments/`);
      console.log(response.data.results);
      const comments = response.data.results;

      // console.log(movies);

      dispatch({
        type: "SET_COMMENTS",
        payload: {
          data: comments,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSearchMovies = async (value) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    const response = await axios.get(
      `http://35.234.80.217/api/v1/movie/?search=${value}`,
      {
        headers: {
          Authorization: ` Token ${token}`,
        },
      }
    );
    const movies = response.data.results;
    dispatch({
      type: "SET_MOVIES",
      payload: {
        data: movies,
      },
    });
  };

  const fetchFilterMovies = async (value, page) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    const response = await axios.get(
      `http://35.234.80.217/api/v1/movie/?genre=${value}&page=${page}`,
      {
        headers: {
          Authorization: ` Token ${token}`,
        },
      }
    );
    const movies = response.data.results;
    const total = response.data.count;
    dispatch({
      type: "SET_MOVIES",
      payload: {
        data: movies,
        total,
      },
    });
  };

  const fetchMovieDetail = async (id) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    // console.log(user);
    const token = user.access;
    // console.log(token);
    const response = await axios.get(
      `http://35.234.80.217/api/v1/movie/${id}/`,
      {
        headers: {
          Authorization: `Token ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    const movieDetail = response.data;
    console.log(movieDetail);
    dispatch({
      type: "SET_MOVIE_DETAIL",
      payload: movieDetail,
    });
  };

  const createMovie = async (movie) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    const response = await axios.post(
      "http://35.234.80.217/api/v1/movie/create/",
      movie,
      {
        headers: {
          Authorization: `Token ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    const createdMovie = response.data;
    // console.log(createdMovie);
    dispatch({
      type: "ADD_MOVIE",
      payload: createdMovie,
    });

    return createdMovie.id;
  };

  const createComment = async (comment) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    console.log(comment);
    const response = await axios.post(
      "http://35.234.80.217/api/v1/movie/comments/",
      {
        body: comment,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
    const createdComment = response.data;
    // console.log(createdMovie);
    dispatch({
      type: "ADD_COMMENT",
      payload: createdComment,
    });

    return createdComment.id;
  };
  const deleteMovie = async (id) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);

    const token = user.access;
    await axios.delete(`http://35.234.80.217/api/v1/movie/delete/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
    dispatch({
      type: "REMOVE_MOVIE",
      payload: id,
    });
  };

  const updateMovie = async (id, data) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    console.log(data);
    const token = user.access;
    await axios.patch(
      `http://35.234.80.217/api/v1/movie/update/${id}/`,
      {
        id: data.id,
        title: data.title,
        descriptions: data.descriptions,
        price: data.price,
        country: data.country,
        duration: data.duration,
        images: data.images,
        year: data.year,
        producer: data.producer,
        genre: data.genre,
        age_limit: data.age_limit,
        comments: data.comments,
        quantity: data.quantity,
        likes: data.likes,
        image: data.image,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    );
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

  const getFavorite = async () => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    const response = await axios.get('http://35.234.80.217/api/v1/movie/favorites/create/',
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    console.log(response.data);
    const favorite = response.data;
    dispatch({ type: "GET_FAVORITE", payload: favorite });
  };
  const addMovieToFavorite = async (movie) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    console.log(movie);
    const response = await axios.post(
      "http://35.234.80.217/api/v1/movie/favorites/",
      {
        movie: movie.id,
        favorites: true,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const favoriteMovie = response.data;
    dispatch({
      type: "ADD_FAVORITE",
      payload: favoriteMovie,
    })
  };

  //если кликнутый продукт есть в корзине, то удаляем, а если нет то пушим
  // let filteredFavorite = favorite.movies.filter(
  //   (elem) => elem.item.id === movie.id
  // );
  // if (filteredFavorite.length > 0) {
  //   favorite.movies = favorite.movies.filter(
  //     (elem) => elem.item.id !== movie.id
  //   );
  // } else {
  //   favorite.movies.push(newMovie);
  // }

  // newMovie.subPrice = calcSubPrice(newMovie);

  // localStorage.setItem("favorite", JSON.stringify(favorite));
  // };
  const fetchGenres = async () => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.acces;
    const response = await axios.get(
      "http://35.234.80.217/api/v1/movie/genre/",
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    const genres = response.data;
    console.log(genres);
    dispatch({
      type: "GET_GENRES",
      payload: genres,
    });
  };
  const fetchGenreMovies = async (genreId) => {
    const response = await axios.get(`${URL}/movie/?genre=${genreId}`);
    const movies = response.data.results;
    const total = response.data.count;

    dispatch({
      type: "SET_MOVIES",
      payload: {
        data: movies,
        total,
      },
    });
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
        fetchFilterMovies,
        createMovie,
        deleteMovie,
        updateMovie,
        fetchSearchMovies,
        fetchMenuItems,
        getFavorite,
        addMovieToFavorite,
        favorite: state.favorite,
        getOrderHistory,
        addMovieToOrderHistory,
        changeMovieCount,
        orderHistory: state.orderHistory,
        fetchGenres,
        genres: state.genres,
        fetchGenreMovies,
        createComment,
        fetchComments,
        comments: state.comments,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
}
