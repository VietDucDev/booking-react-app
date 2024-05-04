import { API_URL } from "../AppAPI";
import ApiService from "../services/ApiService";

const HotelCollectionServices = {
  async getHotelCollection() {
    try {
      const response = await ApiService.getRequest(`${API_URL}hotelCollection`);

      return response.data;
    } catch (error) {
      console.error("Error in getHotelCollection", error);
      throw error;
    }
  },
};

export default HotelCollectionServices;
