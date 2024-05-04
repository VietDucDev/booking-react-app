import { API_URL } from "../AppAPI";
import ApiService from "../services/ApiService";

const CitiesServices = {
  async getCities() {
    try {
      const response = await ApiService.getRequest(`${API_URL}cities`);

      return response.data;
    } catch (error) {
      console.error("Error in getCities", error);
      throw error;
    }
  },
};

export default CitiesServices;
