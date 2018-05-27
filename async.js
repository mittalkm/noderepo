console.log('A');
setTimeout(()=>{
    console.log('B');
},2000);
setTimeout(()=>{
    console.log('D');
},0);
console.log('C');