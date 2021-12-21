const User = require('../model/User');



const register = (username, password) => {

    
    let user = new User({ username, password });
    return user.save();
}


const login = () => {

}


module.exports = {
    register,
    login,
}