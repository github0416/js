
function showNumbers(x, y, ...z) {
    console.log(z);
}

showNumbers(1, 2, 3, 4, 5, 6);

console.log(Symbol.iterator);

var NumbersFromOne = {
    [Symbol.iterator]: function () {
      var i = 1;
      return {
          next: function() {
              return { value: i++, done: false };
          }
      };
    }
  };

console.log(NumbersFromOne);

/* function getEmployee() {
    console.log("function started...");

    var employees = ["Helen", "Katie", "Natalie", "Isabelle"];

    for(const employee of employees) {
        console.log(employee);
    }

    console.log("function ended.");
}


getEmployee();

const iter = getEmployee();
console.log(iter);
 */

function * getEmployeeGen() {
    console.log("function started...");

    var employees = ["Helen", "Katie", "Natalie", "Isabelle"];

    for(const employee of employees) {
        console.log(employee);
        yield employee;
    }

    console.log("function ended.");
}

const itera = getEmployeeGen();
console.log(itera);

var data = itera.next();
console.log(data);

data = itera.next();
console.log(data);

data = itera.next();
console.log(data);

data = itera.next();
console.log(data);
