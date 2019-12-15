const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, 'HtmlCssJavacript','jaxa.html'))
});
app.get('/ajax_info.txt', (req,res)=>{
	res.send("red");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));