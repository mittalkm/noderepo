//const request=require('request');
const yargs=require('yargs');
const abcb=require('./abcb.js');
const argv=yargs
            .options({
                a:{
                    demand:true,
                    alias:'address',
                    description:'Address of destination',
                    string:true
                }
            })
            .help()
            .argv;
abcb.addressg(argv.address,(errormsg,result)=>{
    if(errormsg){
        console.log(errormsg);
    }
    else{
        console.log(JSON.stringify(result,undefined,2));
    }
});