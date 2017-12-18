var ProfileController = require('./ProfileController')
var Promise = require('bluebird')
var jwt = require('jsonwebtoken')

module.exports = {

  currentUser: function(req) {

    return new Promise(function(resolve, reject) {
      if (!req.session || !req.session.token) {
        resolve(null)

        return
      }

      jwt.verify(req.session.token, process.env.TOKEN_SECRET, function(err, decoded){
        if (err){
          req.session.reset()
          resolve(null)

          return
        }
      
        ProfileController
        .getById(decoded.id, false)
        .then(function(result){
          if (err) {
            reject(err)

            return
          }

          resolve(result)
        })
        .catch(function(error){
          reject(error)

          return
        })
      })
    })
  }

}