import { Axios } from "axios";

const axios = new Axios({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: true,
  withXSRFToken: true,
});

export { axios };
