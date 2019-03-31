import axios from "axios";

//  Additional parameters go into params
//  section on the App.js file
//  Header info goes into the header object

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCES_KEY}`
    }
});
