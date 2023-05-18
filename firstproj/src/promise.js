var p = new Promise(
    

    (resolve, reject) => {
        var b;

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



