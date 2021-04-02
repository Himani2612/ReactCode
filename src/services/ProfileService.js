import axios from 'axios';
const USERS_REST_API_URL = 'http://localhost:8080/profile';
class ProfileService {

    getProfiles(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new ProfileService();