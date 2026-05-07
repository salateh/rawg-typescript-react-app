import axios from "axios";
import { API_KEY, BASE_URL } from "./config";
const controller = new AbortController();
const rawgApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
  
});
export default rawgApi;
