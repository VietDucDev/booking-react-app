import { API_URL } from "../AppAPI";
import ApiService from "../services/ApiService";

const CheckoutHotelService = {
  async postCheckoutHotel(data: any) {
    try {
      const response = await ApiService.postRequest(API_URL + "checkout", data);

      return response.data;
    } catch (error) {
      console.error("Error in postproduct", error);
      throw error;
    }
  },
  async deleteCheckoutHotel(id: number) {
    try {
      const hotelId = id ? `/${id}` : "";
      const response = await ApiService.deleteRequest(
        API_URL + "checkout/" + hotelId
      );

      return response.data;
    } catch (error) {
      console.error("Error in deleteproduct", error);
      throw error;
    }
  },
};

export default CheckoutHotelService;
