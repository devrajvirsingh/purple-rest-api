const express = require('express');
const app = express();
const port = 3300;
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(routes)
app.listen(port , ()=>{
    console.log(`server is listening on ${port}`)
})