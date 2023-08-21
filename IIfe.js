(function code(){
    console.log('this is frist iife function')
})();

(()=>{
    console.log('this is second iife function')
})();

((name)=>{
    console.log(`this is ${name} iife function`)
})('three');