// const t = [0, 1];

// last = [];
// const split = (arr, b, last) => {
//     if (b == 0) {
//       last.push([], [], [], [], []);
//     } else if (b == arr.length) {
//       for (let i = 0; i < 5; i++) {
//         last.push([...arr]);
//       }
//     } else if (arr.length == 2) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[0]]);
//       }
//     } else if (arr.length == 3) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[1], arr[2]]);
//         last.push([arr[0], arr[2]]);
//         last.push([arr[0], arr[1]]);
//         last.push([arr[1], arr[2]]);
//       }
//     } else if (arr.length == 4) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[0]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[1], arr[2]]);
//         last.push([arr[0], arr[3]]);
//         last.push([arr[0], arr[2]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[1], arr[2], arr[3]]);
//         last.push([arr[0], arr[1], arr[3]]);
//         last.push([arr[0], arr[2], arr[3]]);
//         last.push([arr[1], arr[2], arr[3]]);
//       }
//     } else if (arr.length == 5) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[0], arr[4]]);
//         last.push([arr[1], arr[2]]);
//         last.push([arr[3], arr[4]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[2], arr[3], arr[4]]);
//         last.push([arr[1], arr[2], arr[3]]);
//         last.push([arr[2], arr[3], arr[4]]);
//         last.push([arr[0], arr[3], arr[4]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[0], arr[1], arr[3], arr[4]]);
//         last.push([arr[0], arr[2], arr[3], arr[4]]);
//         last.push([arr[0], arr[1], arr[2], arr[4]]);
//       }
//     } else if (arr.length == 6) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[4], arr[5]]);
//         last.push([arr[0], arr[2]]);
//         last.push([arr[2], arr[4]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[3], arr[5]]);
//         last.push([arr[1], arr[2], arr[3]]);
//         last.push([arr[3], arr[4], arr[5]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[0], arr[1], arr[4], arr[5]]);
//         last.push([arr[0], arr[3], arr[4], arr[5]]);
//       } else if (b == 5) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[1], arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[1], arr[2], arr[4], arr[5]]);
//       }
//     } else if (arr.length == 7) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[4], arr[5]]);
//         last.push([arr[0], arr[6]]);
//         last.push([arr[1], arr[5]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[3], arr[6]]);
//         last.push([arr[1], arr[2], arr[6]]);
//         last.push([arr[2], arr[4], arr[5]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[1], arr[2], arr[4], arr[5]]);
//         last.push([arr[0], arr[1], arr[5], arr[6]]);
//         last.push([arr[1], arr[2], arr[4], arr[6]]);
//       } else if (b == 5) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[1], arr[3], arr[5], arr[6]]);
//         last.push([arr[0], arr[2], arr[3], arr[4], arr[6]]);
//       } else if (b == 6) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[0], arr[1], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[5], arr[6]]);
//         last.push([arr[0], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//       }
//     } else if (arr.length == 8) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[4], arr[5]]);
//         last.push([arr[6], arr[7]]);
//         last.push([arr[0], arr[7]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[3], arr[4], arr[5]]);
//         last.push([arr[0], arr[6], arr[7]]);
//         last.push([arr[1], arr[2], arr[3]]);
//         last.push([arr[4], arr[5], arr[6]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[0], arr[1], arr[6], arr[7]]);
//       } else if (b == 5) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[0], arr[2], arr[4], arr[6], arr[7]]);
//       } else if (b == 6) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[0], arr[1], arr[3], arr[4], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[4], arr[5], arr[7]]);
//       } else if (b == 7) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[7]]);
//       }
//     } else if (arr.length == 9) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[4], arr[5]]);
//         last.push([arr[6], arr[7]]);
//         last.push([arr[0], arr[8]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[3], arr[4], arr[5]]);
//         last.push([arr[6], arr[7], arr[8]]);
//         last.push([arr[1], arr[2], arr[3]]);
//         last.push([arr[5], arr[6], arr[7]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[8]]);
//         last.push([arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[1], arr[2], arr[4], arr[7]]);
//       } else if (b == 5) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6]]);
//       } else if (b == 6) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[6], arr[7], arr[8]]);
//       } else if (b == 7) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[2], arr[4], arr[6], arr[7], arr[8]]);
//         last.push([arr[0], arr[1], arr[3], arr[5], arr[6], arr[7], arr[8]]);
//       } else if (b == 8) {
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//         ]);
//         last.push([
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//         last.push([
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//       }
//     } else if (arr.length == 10) {
//       if (b == 1) {
//         last.push([arr[0]]);
//         last.push([arr[1]]);
//         last.push([arr[2]]);
//         last.push([arr[3]]);
//         last.push([arr[4]]);
//       } else if (b == 2) {
//         last.push([arr[0], arr[1]]);
//         last.push([arr[2], arr[3]]);
//         last.push([arr[4], arr[5]]);
//         last.push([arr[6], arr[7]]);
//         last.push([arr[8], arr[9]]);
//       } else if (b == 3) {
//         last.push([arr[0], arr[1], arr[2]]);
//         last.push([arr[3], arr[4], arr[5]]);
//         last.push([arr[6], arr[7], arr[8]]);
//         last.push([arr[0], arr[1], arr[9]]);
//         last.push([arr[0], arr[4], arr[9]]);
//       } else if (b == 4) {
//         last.push([arr[0], arr[1], arr[2], arr[3]]);
//         last.push([arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[0], arr[1], arr[8], arr[9]]);
//         last.push([arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[5], arr[6], arr[7], arr[8]]);
//       } else if (b == 5) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4]]);
//         last.push([arr[5], arr[6], arr[7], arr[8], arr[9]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[0], arr[2], arr[4], arr[6], arr[9]]);
//       } else if (b == 6) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
//         last.push([arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[0], arr[1], arr[4], arr[5], arr[8], arr[9]]);
//       } else if (b == 7) {
//         last.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]);
//         last.push([arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]]);
//         last.push([arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
//         last.push([arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]]);
//         last.push([arr[0], arr[1], arr[2], arr[5], arr[7], arr[8], arr[9]]);
//       } else if (b == 8) {
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//         ]);
//         last.push([
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//           arr[9],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[8],
//           arr[9],
//         ]);
//         last.push([
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//       } else if (b == 9) {
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//         ]);
//         last.push([
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//           arr[9],
//         ]);
//         last.push([
//           arr[1],
//           arr[2],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//           arr[9],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[2],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//           arr[9],
//         ]);
//         last.push([
//           arr[0],
//           arr[1],
//           arr[3],
//           arr[4],
//           arr[5],
//           arr[6],
//           arr[7],
//           arr[8],
//           arr[9],
//         ]);
//       }
//     }
//   };
// split(t);
// console.log(last);

a = (b) => {
  return function add(a) {
    return a + b;
  };
};

add5 = a(5);
add1 = a(1);
console.log(1>>2);
// console.log(add1(5));
