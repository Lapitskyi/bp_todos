import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_JSON_PLACEHOLDER}`,
    method: 'get',
});


export const API = {
    getTodos(){
        return instance('todos')
            .then(response => {
                console.log('todos',response)
                return response.data
            })
            .catch(err => {
                if (err.response) {
                    // client never received a response, or request never left
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    },
    getUsers(){
        return instance('users')
            .then(response => {
                console.log('users',response)
                return response.data
            })
            .catch(err => {
                if (err.response) {
                    // client never received a response, or request never left
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    }
}
