import axios from "axios";
const url = "http://localhost:8080/alertlist";
const url2 = "http://localhost:8080/newalert";
const url3 = "http://localhst"

const AlertApi = {
  allAlerts: async () => {
    const data = await axios.get(`${url}`);
    return data;
  },
  postAlert: async (alert) => {
    await axios.post(`${url2}`, alert);
  },
}

export default AlertApi;