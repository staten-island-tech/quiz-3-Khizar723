//const ralphBills = [140,45,275];

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


/*  function tipCalculator(ralphBills) {
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

 const billTips = [tipCalculator(ralphBills[0]) , tipCalculator(ralphBills[1]) , tipCalculator(ralphBills[2])]

 console.log (billTips);

 function totalCalculator(ralphBills) {
    let percentage;
    if (ralphBills <50 ) {
        percentage = 1.20 ;
    } else if (ralphBills >= 50 && ralphBills < 200) {
        percentage = 1.15;
    } else {
        percentage = 1.10 ;
    }
    return percentage * ralphBills;
}

const billTotals = [totalCalculator(ralphBills[0]) , totalCalculator(ralphBills[1]) , totalCalculator(ralphBills[2])]

console.log (billTotals);


/*const amtOver100 = billTotals.filter(value => 100);

console.log(amtOver100); */

/* function billFiltered(value) {
    return value >= 100;
  }
  
  var filtered = [totalCalculator(ralphBills[0]) , totalCalculator(ralphBills[1]) , totalCalculator(ralphBills[2])].filter(billFiltered);

  console.log(filtered) */

  const Dejon = {
      fullname : 'Dejon Kurti' , 
      mass : 110,
      height : 1.95, 
      getBMI : function () {
        return this.mass / (this.mass * this.mass);
    }
  }

  const Rob = {
    fullname :'Robert Grande' , 
    mass : 78,
    height : 1.69,
    getBMI : function () {
        return this.mass / (this.mass * this.mass);
    }
}

console.log(Dejon.getBMI());
console.log(Rob.getBMI());

if (Rob.getBMI() > Dejon.getBMI() ){
    console.log(Rob.fullname + 'has the greater BMI' )
}   else if (Dejon.getBMI()> Rob.getBMI()){
    console.log(Dejon.fullname +'has the greater BMI');
}   