import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/server_routes';
import template from "./client-data/template";
import content_initialState from "./client-data/content_initialState";
import path from "path";

const app = express();
const port = 3001;

// Mongoose database setup
mongoose.connect('mongodb://localhost:27017/kcart', {useNewUrlParser: true}, (err, res) => {
    if(err) {
        console.log("error found while connecting to Mongodb::", err);
    }
});
let assetsPath = path.resolve("public");
app.use(express.static(assetsPath));
//bodyParser setup for middleware settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call the routes
routes(app);

//Start of server based on route 'http://localhost:port/'
app.get('/', (req, res) => {
    const {content, preloadedState} = content_initialState();
    let html = template("Server side rendering", preloadedState, content);
    console.log("server sent html", html);
    res.send(html);
});

//Server is listening at port
app.listen(port, ()=>{
   console.log(`Server is running on Port:: ${port}`);
});