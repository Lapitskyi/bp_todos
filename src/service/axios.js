import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_JSON_PLACEHOLDER}`,
    method: 'get',
});


export const API = {
    getTodos(){
        return instance('todos')
            .then(response => {
                return response.data
            })

    },
    getUsers(){
        return instance('users')
            .then(response => {
                return response.data
            })
    }
}
