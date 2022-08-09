import axios from "axios";

const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: {
                api_key: "38c0c290fa6a0363c75a71c21338cd96",
                language: "ko-KR",
        }
})

export default instance;