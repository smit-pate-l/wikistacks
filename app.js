// const  { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');
const express = require("express");
const {db,Page,User} = require("./models");
const morgan = require("morgan");
const usersRouter = require('./routes/users')
const wikiRouter = require('./routes/wiki')
const path = require('path')

const app = express()

app.use(morgan('dev'))
app.use('/users',usersRouter)
app.use('/wiki',wikiRouter)
app.use(express.static(path.join(__dirname,'stylesheets')))


app.get("/",async (req,res)=>{
    // res.send(main(""));
    res.redirect("http://localhost:3000/wiki")
    
})
//connects to database and checks
// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })
async function init(){
  await db.sync({force:true})
  app.listen(3000);
}

init();