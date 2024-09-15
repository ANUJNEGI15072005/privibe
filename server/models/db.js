const mongoose = require('mongoose');
const mongo_url = 'mongodb+srv://anujn158:iMQEQOUuZoBj8EGY@privibe.anca1.mongodb.net/privibe?retryWrites=true&w=majority&appName=PRIVIBE';

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB Connected.....');
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error('MongoDB Connection Error: ', err);
    });
