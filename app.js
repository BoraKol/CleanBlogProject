const express = require('express');
const app = express();
const ejs = require('ejs');

app.set("view engine" , "ejs");

// const myLogger = (req,res,next) => {
//     console.log("Middleware Log 1");
//     next(); //diğer middleware geçebilmesi için yani req-res döngüsünün tamamlanabilmesi için next gerekli
// }

// const myLogger2 = (req,res,next) => {
//     console.log("Middleware Log 2");
//     next();
// }

app.use(express.static('public'));
// app.use(myLogger);
// app.use(myLogger2);

app.get('/', function (req, res) {
//   res.send('Hello World')
    // const blog = {
    //     id:1,
    //     title:'Blog title',
    //     description: "Blog description",
    // }

    // res.send(blog);
    res.render('index');
})

app.get('/about' , (req,res) => {
    res.render("about");
})

app.get("/add" , (req,res) => {
    res.render("add_post");
})



const port = 3000;

app.listen(port , () => {
    console.log(`Sunucu ${port} portunda baslatildi...`);
})