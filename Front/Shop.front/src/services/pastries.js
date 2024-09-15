import axios from "axios"




const getAllPastries = async () => {
    try {
        const res = await axios.get('/data.json')
        return res.data.pastries
    } catch (error) {
        throw error;
    }
}

export default getAllPastries