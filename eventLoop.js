console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

//The console output is: 1 7 3 5 2 6 4.


// Example of a macrotask: setTimeout
setTimeout(() => {
    console.log("Timeout macrotask executed after 2000 milliseconds");
  }, 2000);
  
  // Example of a microtask: Promise
  Promise.resolve()
    .then(() => console.log("Promise microtask 1"))
    .then(() => console.log("Promise microtask 2"));
  
  console.log("End of the script");