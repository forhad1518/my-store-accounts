import axios from "axios";

const axiosCash = axios.create({
    baseURL: "https://globalcms-server.vercel.app/api/", // Replace with your actual API base URL
    // You can add more default configurations if needed    
});

export default axiosCash;