for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

const myarray = ['shaber','akram','bkram','khalek','malek'];

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
}

for (let index = 0; index < 20; index++) {
    console.log(index)
    if(index === 5){
        console.log('detected is five');
        break 
        //continue
    }
}

let index = 1;

while (index < 10) {
    // index +=1
    index = index+1
    console.log(index)
}

let myarray =['shaber','ahmad','rakib','akram','mango'];
let value =0;
while (value <myarray.length) {
    console.log(myarray[value])
    value = value+1
}

let num = 1
do {
    console.log(num)
    num=num+1
} while (num<=20);