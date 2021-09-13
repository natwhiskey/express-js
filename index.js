const express = require ("express");
const app = express();
const restaurantsRouter = require('./routes/restaurants');

app.listen(3000, ()=>{
    console.log('start server');
});

app.use('/apis/restaurants',restaurantsRouter);
