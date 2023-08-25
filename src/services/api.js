import axios from "axios";

export const getAllCourses = async () => {

    try {
        const url = process.env.REACT_APP_API_URL + '/courses';
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const getAllProfessors = async (courseId) => {
    try{
        const url = process.env.REACT_APP_API_URL + '/professors';
        const response = await axios.get(url);
        return response;
    }
    catch(error){
        console.log(error.response.data);
    }
}

export const getAllCategories = async () => {
    try{
        const url = process.env.REACT_APP_API_URL + '/categories';
        const response = await axios.get(url);
        return response;
    }
    catch(error){
        console.log(error.response.data);
    }
}


export const postLogin = async (email, password) => {
    try {
        const url = process.env.REACT_APP_API_URL + '/signin';
        const response = await axios.post(url, {
            email,
            password
        });
        return response;
    } catch (error) {
        if(error.response.status === 401){
            alert("Email ou senha incorretos");
        }
        else
            alert("Erro ao fazer login, tente novamente");
        console.log(error.response.data);
    }
}

export const postSignUp = async (email, password, confirmPassword) => {
    try {
        const url = process.env.REACT_APP_API_URL + '/signup';
        const response = await axios.post(url, {
            email,
            password,
            confirmPassword
        });
        return response;
    } catch (error) {
        if(error.response.status === 409){
            alert("Email já cadastrado");
        }
        else
            alert("Erro ao fazer cadastro, tente novamente");
        console.log(error.response.data);
    }
}

export const postIsLogado = async () => {
    try {
        const url = process.env.REACT_APP_API_URL + '/isauth';
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const config = 
        {
            headers:{
            'Authorization': `Bearer ${UserInfo.token}`
            }
        }
        const response = await axios.post(url, {}, config);
        return response;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const deleteCourse = async (courseId) => {
    try {
        const url = process.env.REACT_APP_API_URL + '/courses/' + courseId;
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const config = 
        {
            headers:{
            'Authorization': `Bearer ${UserInfo.token}`
            }
        }
        const response = await axios.delete(url, config);
        return response;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const postCourse = async (name, description, image, categoryName, professorName) => {
    try {
        const url = process.env.REACT_APP_API_URL + '/courses';
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const config = 
        {
            headers:{
            'Authorization': `Bearer ${UserInfo.token}`
            }
        }
        console.log(categoryName);
        const response = await axios.post(url, {
            name,
            description,
            image,
            categoryName,
            professorName
        }, config);
        return response;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const updateCourse = async (courseId, name, description, image, categoryName, professorName) => {
    try {
        const url = process.env.REACT_APP_API_URL + '/courses/' + courseId;
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const config = 
        {
            headers:{
            'Authorization': `Bearer ${UserInfo.token}`
            }
        }
        console.log(categoryName);
        const response = await axios.put(url, {
            name,
            description,
            image,
            categoryName,
            professorName
        }, config);
        return response;
    } catch (error) {
        console.log(error.response.data);
    }
}

