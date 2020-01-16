import axios from "axios";
import { api } from "./config";

export const getArticles = keyword =>
  axios({
    url: `${api}/v1/news?q=${keyword}`,
    method: "get"
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
