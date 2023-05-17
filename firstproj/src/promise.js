var p = new Promise(
    

    (resolve, reject) => {
        let b;

        console.log("invoked with: " + b); // line #1
//        setTimeout(square=(x) => {console.log("defining square"); resolve(x*x); }, 10000)
        setTimeout(triple = (x) => {console.log("defining triple: " + b); resolve(b*x); }, 10000, 6)

        b = 3;
    }

);

console.log("promise created");

p.then((x) => { console.log(`tripled: ${x}`); });

// console.log(square);

triple(5);

C:\Program Files\nodejs\node.exe .\src\promise.js
invoked with: undefined     <-- b's value not available yet at line #1
promise created
defining triple: 3          <-- b's value is available when triple() is executed
tripled: 15
defining triple: 3          <-- promise is only resolved once, so no "tripled: 18" is logged

