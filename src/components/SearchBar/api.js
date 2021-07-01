import axios from "axios";
import { useHistory } from "react-router";
import { notifyError } from "../../helpers/notifiers";

// const { REACT_APP_API_URL: URL } = process.env;

export const fetchSearchMovies = async (value) => {
  try {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    if (user) {
      const token = user.access;

      if (!value) {
        return [];
      }
      const response = await axios.get(
        `http://35.234.80.217/api/v1/movie/?search=${value}`,
        {
          headers: {
            Authorization: ` Token ${token}`,
          },
        }
      );
      return response.data;
    }
  } catch {
    notifyError("Войдите в аккаунт или зарегестрируйтесь!");
  }
};
