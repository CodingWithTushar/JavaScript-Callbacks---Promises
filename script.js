//Asynchronous Nature & Action

console.log("It's Working")

console.log("It's Not Working")

setTimeout(() => {
    console.log("I Am Inside SetTime")
}, 0);

console.log(" The End ")

// CallBack

const Callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, CallBack) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = CallBack("Tushar");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",Callback)