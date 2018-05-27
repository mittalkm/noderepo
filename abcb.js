const request=require('request');
var addressg=(addressf,callback)=>{
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${addressf}`,
        json:true
    },(error,response,body)=>{
        // callback function.
        //console.log(body.results[0].geometry);
        //console.log(JSON.stringify(body),undefined,2);
        if(error){
            callback('Unable to connect to server');
        }else if(body.status==='ZERO_RESULTS'){
            callback('Address not found');
        }
        else if(body.status==='OK'){
        callback(undefined,body.results[0].geometry.location);
        }
    });
};
module.exports={
    addressg:addressg
};