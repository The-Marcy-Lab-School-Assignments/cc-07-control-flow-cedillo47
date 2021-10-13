//1
function sumOfFourAndSix(){
    let sum = 0; 
    for( let i = 1; i < 1000; i++){
        if (i % 6 === 0 && i % 4 === 0 ){
            sum+=i 
        }
    }
  return sum 
}

// //2
// function oddAndEvenInFifteen(){
//   for(let i = 0; i <= 15; i ++){
//       if(i % 2 !== 0){
//           console.log (`${i} is odd`)
//       } else {
//           console.log(`${i} is even`)
//       }

//   }
// }

// oddAndEvenInFifteen()
//3
function assignGrade(grade){
  if( grade <= 100 && grade >= 91 )
{  return "A"
} else if ( grade <= 90 && grade >= 81){
    return "B"
} else if (grade <= 80 && grade >= 71){
    return "C"
} else if ( grade <= 70 && grade >= 65){
    return "D"
}
else {
    return "F"
}
}
console.log(assignGrade(88))




