var p = new Promise(
    (resolve, reject) => {
        console.log("invoked");
//        setTimeout(square=(x) => {console.log("defining square"); resolve(x*x); }, 10000)
        setTimeout((x) => {console.log("defining square"); resolve(x*x); }, 1, 5)
    }
);

console.log("promise created");

p.then((x) => { console.log(`squared: ${x}`); });

// console.log(square);

// square(5);

C:\Program Files\nodejs\node.exe .\src\promise.js
invoked                <-- the function parameter passed to Promise constructor is immediately invoked
promise created        <-- starts executing synchronous stmts
defining square        <-- async op in promise is executed
squared: 25            <-- promise resolve part is done