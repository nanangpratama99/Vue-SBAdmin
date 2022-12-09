import http from '../http-common';

class SbadminServices {
    // Login Data
    login(data) {
        return http.post("/sbadmin/login", data);
    }

    // Register Data
    register(data) {
        return http.post("/sbadmin/register", data)
    }

}

export default new SbadminServices();