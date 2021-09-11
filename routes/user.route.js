
const userService = require('../services/user.service')
const { auth } = require('../middleware/userAuth.middleware')



exports.userRoute = (app) => {
    app.post('/signUp',userService.registerUser);
    app.post('/otpVerification',userService.otpVerification);
    app.post('/signUpDetail',auth,userService.signUpDetail);
    app.post('/login',userService.login)

   
}


