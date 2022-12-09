import axios from "axios";

const configs = {
    baseURL: 'http://localhost:3000/',
    // baseURL: 'https://fakeapi.com/',
    ContentType: "application/json; charset=UTF-8"
}

export default axios.create(configs);