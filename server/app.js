const express=require('express')
const app =express()
const cors=require('cors')

const routerMeir=require('./routers/meirRouter')
app.use('/test',routerMeir)

app.listen(8000,console.log("connect to port 8000"))