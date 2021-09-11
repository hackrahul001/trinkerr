
const homeService = require('../services/home.service')
const { auth } = require('../middleware/userAuth.middleware')


exports.homeRoute = (app) => {
   app.get("/home",auth,homeService.home)
   app.post("/interest",auth,auth,homeService.interest)
   app.get("/history",auth,homeService.history);
}


