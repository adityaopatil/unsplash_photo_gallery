import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "0jJM3cp_wqj7-jMwBgfWcrAfgjrwTmW6H4pPfw55fP8",
  },
});
