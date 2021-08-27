import axios from 'axios';

let revampAPI = null;
const RevampAPIService = {
  init(url, token) {
    revampAPI = axios.create({
      baseURL: url,
      timeout: 60000,
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  get(resource) {
    return revampAPI.get(resource);
  },
  post(resource, data) {
    return revampAPI.post(resource, data);
  },
  put(resource, data) {
    return revampAPI.put(resource, data);
  },
  delete(resource) {
    return revampAPI.delete(resource);
  },
};

export default RevampAPIService;
