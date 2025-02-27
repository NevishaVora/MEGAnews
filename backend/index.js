require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.routes')
const categoryRoute = require('./routes/category.routes')
const contactRoute = require('./routes/contact.routes')
const postRoute = require('./routes/post.routes')
const sendPostRoute = require('./routes/sendPost.routes')
const savePostRoute = require('./routes/savePost.routes');
const adminRoute = require('./routes/admin.routes');



const app = express();
const cors = require('cors');
app.use(cors());

mongoose.connect("mongodb://localhost:27017/MegaNews")
    .then(() => {
        console.log("connected to database!");
        app.listen(5000, () => {
            console.log("server is runing on port 5000");
        });
    })
    .catch(() => {
        console.log("Connection failed");
    })
//middleware

app.use(express.json());
//routes
app.use('/api/auth', authRoute);
app.use('/api/category', categoryRoute);
app.use('/api/contact', contactRoute);
app.use('/api/post', postRoute);
app.use('/api/sendPost', sendPostRoute);
app.use('/api/savedPost', savePostRoute);
app.use('/api/admin', adminRoute);

app.use('/uploads', express.static('uploads'));
app.use('/categoryimg', express.static('categoryimg'));
app.use('/contactimg', express.static('contactimg'));
app.use('/sendPostimg', express.static('sendPostimg'));




app.get('/', (req, res) => {
    res.send('Hello how are you');
})
