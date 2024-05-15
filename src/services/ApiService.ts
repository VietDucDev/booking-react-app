import axios, { AxiosResponse } from "axios";

class ApiServices {
  browserInfo = navigator.userAgent;

  // constructor() {
  //   axios.interceptors.request.use((request) => {
  //     if (this.browserInfo) {
  //       request.headers["Browser-Info"] = this.browserInfo;
  //     }
  //     return request;
  //   });

  //   axios.interceptors.request.use(
  //     (response) => response,
  //     (error) => {
  //       const { config, response } = error;
  //       if (response.status === 404) {
  //         alert("Error with code 404");
  //       }
  //     }
  //   );
  // }

  getRequest(url: string): Promise<AxiosResponse> {
    // console.log("url: ", url);
    return axios.get(url);
  }

  postRequest(url: string, args: any): Promise<AxiosResponse> {
    return axios.post(url, args);
  }

  putRequest(url: string, args: any): Promise<AxiosResponse> {
    return axios.put(url, args);
  }

  deleteRequest(url: string): Promise<AxiosResponse> {
    return axios.delete(url);
  }
}

const ApiService = new ApiServices();
export default ApiService;
