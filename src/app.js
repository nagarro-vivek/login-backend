const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const { handleError, ErrorHandler } = require('./handler/error');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/user', userRoutes);



app.get('/', (req, res) => {
    res.send("hello");
});

app.use((err, req, res, next) => {
    handleError(err,res);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
