const axios=require('axios');
var asynadd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b);
            }
            else{
                reject('Argument must be number');
            }
        },1500);
    });
};
/*var someprom=new Promise((resolve,reject)=>{
    reject('Datar of result');
});
someprom.then((message)=>{
    console.log(message);
},(errormsg)=>{
    console.log(errormsg);
});*/
asynadd(3,4).then((res)=>{
    console.log(res);
    return asynadd(res,67);
})
.then((res)=>{
    console.log(res);   
})
.catch((emsg)=>{
    console.log(emsg);
});
axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=padampur').then((response)=>{
    console.log(response.data);
})
.catch((e)=>{

});