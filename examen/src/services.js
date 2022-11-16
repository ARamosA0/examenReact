import axios from "axios";

export const getPostulante = async() => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/postulante/');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postPostulante = async(data) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/postulante/', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const putPostulante = async(id, data) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/postulante/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deletePostulante = async(id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/postulante/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};