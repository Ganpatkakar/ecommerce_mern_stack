import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/server_routes';

const app = express();
const port = 3001;

//Mongoose database setup
// mongoose.connect('mongodb://localhost:27017/kcart', {useNewUrlParser: true}, (err, res) => {
//     if(err) {
//         console.log("error found while connecting to Mongodb::", err);
//     }
// });
app.use(express.static('dist'))
//bodyParser setup for middleware settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call the routes
// routes(app);

//Start of server based on route 'http://localhost:port/'
app.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>MERN Project</title>
        </head>
        <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">Some content</div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </body>
        </html>
    `
    res.send({ username:"Ganpat Kakar"});
});

//Server is listening at port
app.listen(port, ()=>{
   console.log(`Server is running on Port:: ${port}`);
});