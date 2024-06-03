const express = require('express')
const connectToMongo = require('./db');
const app = express();
const cors = require('cors');
const port = 4000
connectToMongo();

app.use(cors());
//middleware
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/subjects', require('./routes/subjects'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Gradicious app listening on port ${port}`)
})