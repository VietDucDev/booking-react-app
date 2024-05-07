import { API_URL } from "../AppAPI";
import ApiService from "../services/ApiService";

const DistrictsServices = {
  async getDistricts() {
    try {
      const response = await ApiService.getRequest(`${API_URL}districts`);

      return response.data;
    } catch (error) {
      console.error("Error in getDistricts", error);
      throw error;
    }
  },
};

export default DistrictsServices;
