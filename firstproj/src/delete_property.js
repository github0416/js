var arr = ["1", "2", "3", "4", "5"];

console.log(arr);
console.log("arr[3]=" + arr[3]);
console.log("arr[\"3\"]=" + arr["3"]);

Reflect.deleteProperty(arr, "3");

console.log(arr);

arr = ["1", "2", "3", "4", "5"];

Reflect.deleteProperty(arr, 3);

console.log(arr);

/*

(5) ['1', '2', '3', '4', '5']
arr[3]=4
arr["3"]=4
(5) ['1', '2', '3', …, '5']
(5) ['1', '2', '3', …, '5']

*/