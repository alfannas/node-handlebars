const data = require('../models/data.json')

const pages = app=>{

	// handle view engine
	const handleGetHBS = (req,res)=>{
		res.render('index', {
			items : data
		})
	}

	const handleGetRoot = (req,res)=>{
		res.send('hello world')
	}

	//routes
	app.get('/', handleGetRoot)
	app.get('/hbs', handleGetHBS)

}

module.exports = pages 