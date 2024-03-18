
let Km:number = 11;
let Miles:number = 0;

function change_Km_2_miles( n1:number):number
{
    let value: number = 0.621371;
   
    return(n1 * value);    
};

Miles = change_Km_2_miles(Km);
console.log(Km, ' Libras = ', Miles, ' Kilogramos');