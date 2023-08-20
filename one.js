const myPromice =async()=>{
    try {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await res.json();
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}

myPromice()

fetch('https://jsonplaceholder.typicode.com/posts')
.then((respons)=>{
    return respons.json()
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})