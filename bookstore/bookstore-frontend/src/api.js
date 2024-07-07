import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const fetchBooks = () => axios.get(`${API_URL}books/`);
export const fetchTransactions = () => axios.get(`${API_URL}transactions/`);
export const fetchCart = () => axios.get(`${API_URL}cart/`);
export const addBook = (book) => axios.post(`${API_URL}books/`, book);
export const addTransaction = (transaction) => axios.post(`${API_URL}transactions/`, transaction);
export const addToCart = (cartItem) => axios.post(`${API_URL}cart/`, cartItem);
