import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"


const app = express();
const PORT = 3000;
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

mongoose.connect(process.env.DATABASE_URI_LOCAL)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
).catch((error) => {
    console.log(error);
});

