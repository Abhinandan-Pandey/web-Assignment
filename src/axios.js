import axios from "axios";

const instance = axios.create({
  baseURL: "https://web-assignment-10bef.firebaseio.com/",
});

export default instance;
