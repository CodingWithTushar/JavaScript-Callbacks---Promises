console.log('Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("No Random Number Was Not Supporting You ")
    }
    else{

        setTimeout(() => {
            console.log('Yes I Am Done');
            resolve("Tushar")
        },3000);
    }
    })
    
prom1.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);
    
})


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("No Random Number Was Not Supporting You 2 ")
    }
    else{

        setTimeout(() => {
            console.log('Yes I Am Done 2 ');
            resolve("Tushar 2 ")
        },1000);
    }
    })
    
let p3 = Promise.race([prom1,prom2])

p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
    
})


