const express=require('express');
const hbs=require('hbs');
var app=express();
const port=process.env.PORT || 3000;
// set app related parameters.
app.set('view engine','hbs');
hbs.registerPartials('../views/partials');
app.use(express.static('../public'));
app.use((req,res,next)=>{
    var now=new Date().toString();
    console.log(`${now}`);
    next();
});
app.get('/',(req,res)=>{
    res.send('<h1>Hello express</h1>');
});
app.get('/about',(req,res)=>{
    //res.send('<h1>Hello express</h1>');
    /*res.send({
        name:'Kunal',
        age:18
    });*/
    res.render('../../views/about.hbs',{
        auther:'Kunal Mittal',
        age:18,
        currentYear:new Date().getFullYear()
    });
});
app.post('/about',(req,res)=>{
    var obj={
        name:'Kunal',
        age:20,
        location:'Jaipur'
    };
    res.send(JSON.stringify(obj,undefined,2));
});
app.listen(port,()=>{
    console.log('Server Started');
});