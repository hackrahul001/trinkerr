exports.initRoutes = (app) => {
    require('./user.route').userRoute(app)
    require('./home.route').homeRoute(app)
    
  }