export class EvenCalculator {
  isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "El número " + number + " es par";
    } else {
      return "El número " + number + " es impar";
    }
  }
}

// no me funciona de esta forma:

// const isEvenOrOdd =  number => {
//     if (number % 2 === 0) {
    //   return "El número " + number + " es par";
    // } else {
    //   return "El número " + number + " es impar";
    // }

// }

// const objToExport = {
//     isEvenOrOdd: isEvenOrOdd
//   };

//   export default objToExport;
