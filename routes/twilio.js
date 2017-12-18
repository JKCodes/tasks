var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var utils = require('../utils')


router.get('/notify', function(req, res, next) {
	utils.TwilioHelper
	.sendSMS('5166064964', 'Does this thing work 4?')
	.then(function(message){
		res.json({
			confirmation: 'success',
			message: message
		})
		return message
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})


router.post('/notify', function(req, res, next) {
	if(req.body.recipient == null){
		res.json({
			confirmation: 'fail',
			message: 'Please specify a recipient.'
		})
		return
	}

	if(req.body.text == null){
		res.json({
			confirmation: 'fail',
			message: 'Please include a message.'
		})
		return
	}

	controllers.profile
	.getById(req.body.recipient, false)
	.then(function(profile){
		var msg = req.body.sender.username + ' replied to your task. Here is the message:\n\n'+req.body.text+'. View '+req.body.sender.username+'\'s profile here: https://jkcodes-tasks.herokuapp.com/profile/'+req.body.sender.id+''
		
		return utils.TwilioHelper.sendSMS(profile.phone, msg)
	})
	.then(function(message){
		res.json({
			confirmation: 'success',
			message: message
		})
		return message
	})	
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})

router.get('/task', function(req, res, next) {
    res.json({
    	confirmation: 'success',
    	message: 'It worked!'
    })
})

router.post('/task', function(req, res, next) {

	var message = req.body['Body']	
	var validCategories = ['delivery', 'dog walking', 'house cleaning', 'misc']

	var parts = message.split('.')
	var category = (parts.length == 1) ? 'misc' : parts[1].trim().toLowerCase()
	var description = null

	if(validCategories.indexOf(category) == -1){
		category = 'misc'
		var theRest = parts.slice(1)
		description = theRest.trim()
	} else {
		description = (parts.length < 3) ? '' : parts[2].trim()
	}

	var task = {
		title: parts[0],
		category: category,
		description: description
	}

	var from = req.body['From'].replace('+1', '') 

	controllers.profile.get({phone: from}, false)
	.then(function(profiles){
		if (profiles.length == 0){
			throw new Error('Go away.')
			return
		}

		var profile = profiles[0]
		task['profile'] = {
			id: profile.id,
			username: profile.username
		}

		return controllers.task.post(task, false)
	})
	.then(function(result){
		var msg = 'Thanks, we got your task.'

		return utils.TwilioHelper.sendSMS(from, msg)
	  
	})
	.catch(function(err){
		console.log('ERROR: '+err.message)
	})
})

module.exports = router
