import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20e5828656494353a23245d3af502df3",
  },
});
