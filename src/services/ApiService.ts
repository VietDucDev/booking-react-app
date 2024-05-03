import axios, { AxiosResponse } from "axios";

class ApiServices {
  browerInfo = navigator.userAgent;

  constructor() {
    axios.interceptors.request.use((request) => {
      if (this.browerInfo) {
        request.headers["Browser-Info"] = this.browerInfo;
      }
      return request;
    });

    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        const { config, res } = err;
        if (res.status === 404) {
          alert("Error with code 404");
        }
      }
    );
  }

  getRequest(url: string): Promise<AxiosResponse> {
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
