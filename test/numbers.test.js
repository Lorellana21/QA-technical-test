 import { EvenCalculator } from "../src/js/numbers";

 describe ("is even or odd", () => {

     let calc;

     beforeEach(() => {
         calc = new EvenCalculator();

     })
     it("check", () => {
         const number = 10;

         expect(calc.isEvenOrOdd(number)).toEqual("El número " + number + " es par");
    })
 })




// no me funciona de esta forma:
// import { numbers} from "../src/js/numbers";

// describe('testing numbers module', () => {

//     it('check if number is even or odd', () => {
//         
//         const randomNumber = 100;
//            
//        
//         expect(numbers.isEvenOrOdd(randomNumber)).toEqual(0);
//           
//       });
// })