import axios from 'axios';

const apiClient = axios.create({
<<<<<<< HEAD
    baseURL:'http://127.0.0.1:8080/almacenadora/v1',
    timeout:1000
})
export const addTask=async (data)=>{
    try {
        return await apiClient.post('/to-do/createToDo',data);
    } catch (e) {
        return{
            error:true,
=======
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1',
    timeout: 1000
});

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return{
            error: true,
>>>>>>> e9271616cf3bdd24dc65b5f28da43f2257f77991
            e
        }
    }
}