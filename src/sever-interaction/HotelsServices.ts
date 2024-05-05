import { API_URL } from "../AppAPI";
import ApiService from "../services/ApiService";

const HotelsServices = {
  async getHotels(url: string) {
    try {
      if (url) {
        const response = await ApiService.getRequest(`${API_URL}hotels${url}`);
        return response.data;
      }
      const response = await ApiService.getRequest(`${API_URL}hotels`);

      return response.data;
    } catch (error) {
      console.error("Error in getHotels", error);
      throw error;
    }
  },
  async getHotel(id: string) {
    try {
      const response = await ApiService.getRequest(`${API_URL}hotels?id=${id}`);

      return response.data;
    } catch (error) {
      console.error("Error in getHotels", error);
      throw error;
    }
  },
};

export default HotelsServices;
