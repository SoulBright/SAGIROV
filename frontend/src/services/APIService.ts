import axios from '../axiosConfig'

export default class APIService {
    static async getMenu() {
        const response = await axios.get('/menu/')
        return response
    }

    static async getAdvantages() {
        const response = await axios.get('/advantages/')
        return response
    }
}   