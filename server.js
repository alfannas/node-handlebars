const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const app = express()

// set port
app.set('port', (process.env.PORT || 2000))

// view engine setup
app.engine('hbs', hbs({
	extname: 'hbs',
	defaultLayout: 'layout',
	layoutsDir: path.join(__dirname, 'views')
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//static file
app.use(express.static('static'))

const routes = require('./routes/routes.js')(app)

app.listen(app.get('port'), ()=>{
	console.log('server running at port 2000')
})
