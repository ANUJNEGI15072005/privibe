const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ManifestRouter = require('./routes/ManifestRouter');
const Auth = require('./middlewares/Auth'); 
const profile = require('./routes/profile');
require('dotenv').config(); 

const mongo_url = process.env.MONGO_CONN || 'mongodb+srv://anujn158:iMQEQOUuZoBj8EGY@privibe.anca1.mongodb.net/privibe?retryWrites=true&w=majority&appName=PRIVIBE';

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);  
  });

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json()); 
app.use(cors());  

app.use(express.static(path.join(__dirname, '../client/dist'))); 

app.use('/auth', AuthRouter); 
app.use('/api/manifest', ManifestRouter);  
app.use('/api/profile', profile)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html')); 
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
