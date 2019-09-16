const ralphBills = [140,45,275];

/* let tips20 = function (ralphBills[1] * 1.2)

let tips15 = function (ralphBills[0] * 1.15)

let tips10 = function (ralphBills[2] * 1.1) */

/* if (ralphBills[1] < 50) {
    console.log(`Total Tip is ${ralphBills[1] * .20}`)
}

else if (ralphBills[1] < 50) {
    console.log(`Total Payment is ${ralphBills[1] * 1.20}`)
}


 else if (50 < ralphBills[0] < 200) {
    console.log(`Total Tip is ${ralphBills[1] * .15}`)
}

else if (50 < ralphBills[1] < 200) {
    console.log(`Total Payment is ${ralphBills[1] * 1.15}`)
}


else if (ralphBills[2] > 200) {
    console.log(`Total Tip is ${ralphBills[1] * .10}`)
}

else if (ralphBills[2] > 200) {
    console.log(`Total Payment is ${ralphBills[1] * 1.10}`)
}
 */


 function tipCalculator(ralphBills) {
     let percentage;
     if (ralphBills <50 ) {
         percentage = 0.2;
     } else if (ralphBills >= 50 && ralphBills < 200) {
         percentage = 0.15;
     } else {
         percentage = 0.1;
     }
     return percentage * ralphBills;
 }

 const billTips = [tipCalculator(ralphBills[0] , tipCalculator(ralphBills[1] , tipCalculator(ralphBills[2]]

 