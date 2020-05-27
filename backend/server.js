const express= require('express');
const app= express();
const cors=require('cors');
const bodyParser=require('body-parser');
const PORT=4000;
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
const connection=mongoose.connection;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function() {
    console.log("Server is running on PORT: " + PORT);
});
connection.once('open', function(){
    console.log("Mongodb database connection is set up successfully")
});