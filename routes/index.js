var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

var React = require('react');
var ReactRouter = require('react-router');
var ReactDOMServer = require('react-dom/server');

var serverapp = require('../public/build/es5/serverapp');
var store = require('../public/build/es5/stores')
var Home = require('../public/build/es5/components/layout/Home')
var Split = require('../public/build/es5/components/layout/Split')
var ProfileLayout = require('../public/build/es5/components/layout/ProfileLayout')

var controllers = require('../controllers')

matchRoutes = function(req, routes) {
  return new Promise(function(resolve, reject) {
    ReactRouter.match({ routes: routes, location: req.url }, function(error, redirectLocation, renderProps) {
      if (error) {
        reject(error)
        return
      }

      resolve(renderProps)
    })
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {

  var initialStore = null
  var reducers = {}

  controllers.account.currentUser(req)
  .then(function(user) {
    // fetch currentUser
    reducers['account'] = {
      user: user
    }

    reducers['task'] = {
      selectedCategory: 'delivery',
      categories: [
        'delivery',
        'dog walking',
        'house cleaning',
        'misc'
      ]
    }
  })
  .then(function() {
    // console.log(reducers)
    initialStore = store.configureStore(reducers)

    // console.log(initialStore)
    var routes = {
      path: '/',
      component: serverapp,
      initial: initialStore,
      indexRoute: {
        component: Home
      }
    }

    return matchRoutes(req, routes)
  })
  .then(function(renderProps) {
    var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
    res.render('index', { react: html, preloadedState: JSON.stringify(initialStore.getState()) });
  })
  .catch(function(err) {
    console.log('Not logged in')
  })  
});

router.get('/:page/:id', function(req, res, next) {
  var page = req.params.page
  var id = req.params.id

  var initialStore = null
  var reducers = {}

  if (page == 'api') {
    next()

    return
  }

  if (page == 'profile') {
    controllers.profile.getById(id, false)
    .then(function(profile) {
      console.log(profile)

      var id = profile.id

      reducers['profile'] = {
        id: profile
      }
    })
    .then(function() {
      initialStore = store.configureStore(reducers)

      var routes = {
        path: '/profile/:id',
        component: serverapp,
        initial: initialStore,
        indexRoute: {
          component: ProfileLayout
        }
      }

      return matchRoutes(req, routes)
    })
    .then(function(renderProps) {
      var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
      res.render('index', { react: html, preloadedState: JSON.stringify(initialStore.getState()) });
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  

});

module.exports = router;
