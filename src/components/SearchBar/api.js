import axios from 'axios';

// const { REACT_APP_API_URL: URL } = process.env;

export const fetchSearchMovies = async (value) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`);
    const token = user.access;
    if (!value) {
        return [];
    }
    const response = await axios.get(`http://35.234.80.217/api/v1/movie/?search=${value}`, {
        headers: {
            Authorization: ` Token ${token}`,
        },
    },
    );
    return response.data;
};
