
import axios from 'axios'

var base = 'http://localhost:';
if(process.env.PORT !== undefined) {
    base = '0.0.0.0';
}

const api = axios.create({
    baseURL: base+(process.env.PORT || 8000)+'/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis