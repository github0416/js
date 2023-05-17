
function* fetchData() {
    try {
      const data = yield fetch('https://jsonplaceholder.typicode.com/posts/1');

    //   const data = yield new Promise((resolve, reject) => { console.log("async op started..."); resolve("A"); console.log("async op ended...")});

      console.log(data.status);

    //   const processedData = yield process(data);
    //   console.log(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

console.log("starts from sync part...");

const generator = fetchData();
const promise = generator.next().value;

promise
//   .then( (result) => { console.log("promise resolved"); console.log(result.status); generator.next(result).value; } );
    .then((result) => result.json())
    .then((data) => console.log(data));

C:\Program Files\nodejs\node.exe .\src\generator.js
starts from sync part...
{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit
suscipit recusandae consequun…m rerum est autem sunt rem eveniet architecto'}

