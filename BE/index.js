const express = require('express');
const cors = require('cors');
const app = express();


// app.use(cors({
//     origin:"*",
// }));

app.use(express.json())
app.use(cors());

require('./conn');

const newPostRoutes = require('./Routes/postRoutes')
app.use(newPostRoutes);

const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
});