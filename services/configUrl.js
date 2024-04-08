import axios from "axios";
const BASE_URL = process.env.NEXT_API;
export const httpService = axios.create({
  // baseURL: "https://hotel-management-api-7a7a6866df89.herokuapp.com/api",
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});
// httpService.interceptors.request.use(
//   function (config) {
//     config.headers.token = store.getState().quizSlice.apiKey;

//     store.dispatch(handleLoading(true));
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );
// httpService.interceptors.response.use(
//   function (config) {
//     setTimeout(() => {
//       store.dispatch(handleLoading(false));
//     }, 500);
//     return config;
//   },
//   function (err) {
//     setTimeout(() => {
//       store.dispatch(handleLoading(false));
//     }, 500);
//     return Promise.reject(err);
//   }
// );
