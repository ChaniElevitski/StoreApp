import { apiClient } from "../Api/apiClient";


const GetAllProducts = async () => {
    try {
        const res = await apiClient.get("Products")
        return res.data
    } catch (error) {
        throw error;
    }
}
export default GetAllProducts;
