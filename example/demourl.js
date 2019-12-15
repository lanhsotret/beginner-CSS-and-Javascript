//const express = require('express');
const express = require('express');
const path = require('path');
const app = express();
const router = require('./NodeJs.js')


app.use(express.static(path.join(__dirname, 'HtmlCssJavacript')));

app.use('/api/members', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`server started on ${PORT}`));