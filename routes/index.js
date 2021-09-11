exports.initRoutes = (app) => {
    require('./user.route').errorRoute(app)
    require('./home.route').errorRoute(app)
    
  }