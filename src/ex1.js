// 1.
export const delay = (second) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(second), 1000);
});

export const seconds = async () => {
  console.log(await delay('1s'));
  console.log(await delay('2s'));
  console.log(await delay('3s'));
}

