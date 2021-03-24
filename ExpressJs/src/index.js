const express = require("express");
const app = express();
const path = require("path");

/*
    The Callback function has two parameters , Request(req)  and response (res).
    the request object(req) represents the HTTP requests and has properties 
    for the request query string , Parameter , body , HTTP Headers , Etc

    Similarly the response(res) object respresents the HTTP Response 
    That Express App Sends when it Receives  as HTTP Requests

*/
/* #1: Express JS Introduction, Setup, IDE & First Program in Express JS */
// app.get("/", (req , res)=>
// {
//    res.send("Hello World From ExpressJs")
// })

// app.listen(8000 , ()=>
// {
//     console.log(`Hello World I am from app listen`)
// })

/* #2: Express JS Routing & our First Challenge in Express JS */

// const port = 3000;

// app.get("/", (req , res)=>
// {
//    res.send("Hello I'm From Home")
// })

// app.get("/contact", (req , res)=>
// {
//    res.send("Hello I'm From contact")
// })

// app.get("/about", (req , res)=>
// {
//    res.send("Hello I'm From about")
// })

// app.get("/services", (req , res)=>
// {
//    res.send("Hello I'm From services")
// })

// app.listen(port , ()=>
// {
//     console.log(`Hello I'm Listening from Port ${port}`)
// })

/* #3: How To Send HTML & JSON Data as a Response using Express JS */

// const port = 3000;

// app.get("/", (req, res) => {
//   //    res.write("<h1>Hello I am From Home Page</h1>");
//   //    res.write("<h1>Hello I am From Home Page</h1>");
//   //    res.write("<h1>Hello I am From Home Page</h1>");
//   //    res.write("<h1>Hello I am From Home Page</h1>");
//   // res.send();

//   /* Send Json data  */

//     res.send([{
//         id : 1 ,
//         name: "Talha"
//     },
//     {
//         id : 1 ,
//         name: "Talha"
//     },
//     {
//         id : 1 ,
//         name: "Talha"
//     },
//     {
//         id : 1 ,
//         name: "Talha"
//     },
//     {
//         id : 1 ,
//         name: "Talha"
//     },
//     {
//         id : 1 ,
//         name: "Talha"
//     },
// ])

// });

// app.listen(port, () => {
//   console.log(`Hello I'm Listening from Port ${port}`);
// });

/* #4: Serve HTML CSS & JS Files in Express JS | Middleware in Express JS  */


// const port = 3000;
// const staticpath = path.join(__dirname , "../public");

// app.use(express.static(staticpath));
// app.get("/", (req, res) => {

    
// });

// app.listen(port, () => {
//   console.log(`Hello I'm Listening from Port ${port}`);
// });

/* #6: Template Engines (Pug, hbs, EJS) in Node JS 😍 | Add Dynamic Content in Express JS  */

const port = 8000;
const staticpath = path.join(__dirname , "../public");
// app.use(express.static(staticpath));

app.set('view engine', "hbs");

app.get("", (req, res) => {

  res.render('index' , {
    Dynamic : "Dynamic Data"
  });
});
app.listen(port, () => {
  console.log(`Hello I'm Listening from Port ${port}`);
});