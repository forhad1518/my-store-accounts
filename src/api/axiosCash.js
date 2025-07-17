import axios from "axios";

const axiosCash = axios.create({
    baseURL: "http://localhost:3000/api/", // Replace with your actual API base URL
    // You can add more default configurations if needed    
});

export default axiosCash;