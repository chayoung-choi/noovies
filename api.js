import axios from "axios";

const TMDB_KEY = "17c78cc41f0623b9cf554c7eb5cf59eb";

const makeRequest = (path, params) => axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
        ...params,
        api_key: TMDB_KEY
    }
});
const getAnything = async (path, params = {}) => {
    try {
        const {data: {results}} = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        return [null, e];
    }
}

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", {region: "kr"}),
    search: query => getAnything("/search/movie", {query}),
    movie: id => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
    discover: () => getAnything("/discover/movie")
};

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", {query}),
    show: id => getAnything(`/tv/${id}`, { append_to_response: "videos" })
};

export const apiImage = (
    path,
    defaultPoster = "\"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);