const express = require('express');
const mongoose = require('mongoose');
// const data = require('./data.js');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find( (x) =>x._id === req.params.id )
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({ message: 'Product Not Found' })
//     }
// })


// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// })

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server at http://localhost:${port}`);
}) 