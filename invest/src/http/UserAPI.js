import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, name, password) => {
    const {data} = await $host.post('api/user/registration', {email, name, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)

}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {

    const token = localStorage.getItem('token');

    let email = '';
    if(token) {
        email = jwt_decode(token);
    }
    const {data} = await $authHost.post('api/user/auth', email);

    if(data) {
        console.log('yes')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } 
}

export const activate = async (activationCode) => {
    const {data} = await $host.post('api/user/activate', {activationCode})
    return data
}

export const changeUserInfo = async (email, name, lastName, gender, dateOfBirth, citizenship, accountNumber, bicCode) => {
    const {data} = await $host.post('api/user/changeUserInfo', {email, name, lastName, gender, dateOfBirth, citizenship, accountNumber, bicCode})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const changeUserEmail = async (email, newEmail) => {
    const {data} = await $host.post('api/user/changeUserEmail', {email, newEmail});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const changeUserPassword = async (email, password, newPassword) => {
    const {data} = await $host.post('api/user/changeUserPassword', {email, password, newPassword});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const changeUserMobilePhone = async (email, mobilePhone) => {
    const {data} = await $host.post('api/user/changeUserMobilePhone', {email, mobilePhone});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const sendCodeToMailToRestorePassword = async (email) => {
    const {data} = await $host.post('api/user/sendCodeToMailToRestorePassword', {email});
    return data;
}

export const checkCodeForForgotPassword = async (email, forgotPasswordCode) => {
    const {data} = await $host.post('api/user/checkCodeForForgotPassword', {email, forgotPasswordCode});
    return data;
}

export const restorePassword = async (email, newPassword) => {
    const {data} = await $host.post('api/user/restorePassword', {email, newPassword});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}


export const addProjectToCart = async (userId, projectId) => {
    const {data} = await $host.post('api/basketProject/addBasketProject', {userId, projectId});
    return data;
}

export const getBasketProjects = async (userId) => {
    const {data} = await $host.get('api/basketProject/getBasketProjects/' + userId)
    console.log(data)
    return data
}