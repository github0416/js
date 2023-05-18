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

/*

invoked with: undefined   <-- function in Promise constructor is invoked immediately and sequentially
                          <-- b is referenced before initialized (same for var and let)                 
promise created
defining triple: 3        <-- from the triple(5) call
tripled: 15               <-- from the resolve step in the triple(5) call
defining triple: 3        <-- from the triple() call timed after 10000
                          <-- resolve happens only once, so no "trippled" logged here

*/

