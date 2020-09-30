import express from 'express';
import mongoose from 'mongoose';

//App Config
const app = express();
const port = process.env.PORT || 8081;
const connection_url = `mongodb+srv://admin:93RfrJOHvoIRDTZI@cluster0.gqope.mongodb.net/tinderDB?retryWrites=true&w=majority`;

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello Clever Programmer")
});

//Listener
app.listen(port, () => {
    console.log("Server has started");
});

