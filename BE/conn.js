// mongodb+srv://22mx123:sonali@cluster0.pmnzfou.mongodb.net/
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://22mx123:sonali@cluster0.pmnzfou.mongodb.net/admin_mod', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connected successfully");
}).catch((e)=>{
    console.log("DB is not connected Error occurs");
})


                