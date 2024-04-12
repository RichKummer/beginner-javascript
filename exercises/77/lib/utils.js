// utils can be placed here

export function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not) {
      console.log('we used that one last time');
      return randomItemFromArray(arr, not);
    }
    return item;
  }