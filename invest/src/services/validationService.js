//нельзя сюда передавать setState, но пока так будет 
const checkEmailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validation = {

    isEmpty: (value) => { return (value === '') ? true:  false},

    isEqual: (param1, param2) => { return (param1 === param2) ? true: false},

    checkEmail: (email) => { return checkEmailRegExp.test(email) ? true: false} ,

    checkPassword: (password) => { return (password.length >= 8) ? true: false}
    
}