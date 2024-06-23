const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')

const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sequelize = require('./utils/database').seq

var store = new SequelizeStore({
    db: sequelize,
    tableName: 'sessionMWT'
})
 
const app = express()

app.use(session({
    secret: 'mysecret',
    resave: false ,
    saveUninitialized: false,
    store: store
}))

store.sync({alter:true})


const User = require('./model/association').User
const authRout = require('./routes/auth')
const db = require('./utils/database')
const lessonRout = require('./routes/lesson')

//const adminRout = require()

const port = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))
app.use(flash())


app.use(lessonRout)
app.use(authRout)
//app.use('/admin')



app.use((req, res, next) => { // set it globally
  //res.locals.isAuthenticated = req.session.isLoggedIn || false // registered in all views
  //res.locals.csrfToken = req.csrfToken()
  //res.locals.sendEmail = req.sendEmail
  next()
}) 
 

/* Sentry.setupExpressErrorHandler(app) */

/* app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
}); */


app.listen(port, db.Database)


/* app.get('/api',(req,res)=>{
  res.json({message: ' hello world '})
}) */