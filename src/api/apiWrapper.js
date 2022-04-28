import axios from 'axios';

axios.interceptors.request.use(function (config) {
  // todo do sth for before send request
  // deal with CROS
  config.withCredentials = true;
  config.headers = config.headers || {};
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
  config.headers['Accept'] = 'application/json'

  return config;

}, function (error) {
  // todo do sth for send request fail
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  //  do sth when got response
    return response

}, function (error) {
  console.log("response error----",error)
  return Promise.reject(error);
});


axios.defaults.baseURL = 'http://150.158.37.65:8081'

export default axios
