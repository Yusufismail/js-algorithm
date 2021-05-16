const convertFahrToCelcius=(F)=>{
   let result=(F-32)*5/9
   result=result.toFixed(4)
   if (isNaN(F)===false){
       console.log(`${result} deg C`)
       

   }
   else{
       console.log(`${F} is not a valid number but a/an ${typeof(F)}`)
   }
}

convertFahrToCelcius('7')
convertFahrToCelcius(0)
convertFahrToCelcius('seven')