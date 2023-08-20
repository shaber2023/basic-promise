const myPromis = new Promise (function(resolve,reject){
    setTimeout(() => {
        const error = true
        if(!error){
            resolve('your promise is success')
        }else{
            reject('your promise is faild')
        }
    }, 2000);
})

myPromis.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

myPromis.then(()=>{
    console.log('your promise is successful')
}).catch((error)=>{
    console.log(`your promise is not working ${error}`)
})

async function asyncFunc(){
    try {
        const data = await myPromis;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

asyncFunc()

async function asyncFunc(){
    try {
        await myPromis;
        console.log('your promise is successful')
    } catch (error) {
        console.log(`your promise is not working ${error}`)
    }
}

asyncFunc()