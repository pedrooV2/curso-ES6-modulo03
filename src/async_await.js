const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

// myPromise().then(response => {
//   console.log(response);
// });


// async function executePromise() {
//   console.log(await myPromise());
//   console.log(await myPromise());
//   console.log(await myPromise());
// }


const executePromise = async () => {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}

executePromise();

//  Quando colocams o async, ele transforma a função em um Promise
// Não podemos utilizar o await fora de uma funcção que seja async