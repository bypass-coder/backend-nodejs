const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use();

app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})