const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json());
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Gajaba Project Backend API Is Running Successfuly');
})

connectMongoDB().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

async function connectMongoDB() {
  // await mongoose.connect('mongodb+srv://gajabaProj:gajabaProj@cluster0.4nsfsfa.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect('mongodb+srv://GajabaDB:GajabaDB@cluster0.7rzxpnk.mongodb.net/?retryWrites=true&w=majority');
}

// app.use('/ticket', require('./route/ticket.route'));
app.use('/player', require('./route/player.route'))
app.use('/event', require('./route/event.route'))
app.use('/winner', require('./route/winnerRoutes'))

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})