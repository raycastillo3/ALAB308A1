//PART 1:
// function overflow(counter) {
//   try {
//     overflow(counter + 1);
//   } catch (error) {
//     if (
//       error instanceof RangeError &&
//       error.message.includes("Maximum call stack size exceeded")
//     ) {
//       console.info("counter: ", counter);
//     } else {
//       console.info(error);
//     }
//   }
// }
// overflow(0);

//PART 2: Trampolines

//Flat the array
const flatArray = (arr) => {
    if (arr.length == 0) return [];
    if (Array.isArray(arr[0])){
        return [...flatArray(arr[0]), ...flatArray(arr.slice(1))];
    } else {
        return [arr[0], ...flatArray(arr.slice(1))];
    }
}
//trampoline
const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }       
const inputArr = [[0,1,2,3],[4,5,6], [7,8,9,10]];
// const inputArr2 = [0, 1, [2, [3, [4, 5]]]];
// [0, 1, 2, 3, 4, 5];
console.log(trampoline(flatArray, inputArr));
// console.log(trampoline(flatArray, inputArr2));


//PART 3 IS ON THE HTML     