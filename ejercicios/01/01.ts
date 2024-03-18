
let pounds:number = 150;
let kg:number = 0;

function change( n1:number):number
{
    let value: number = 0.453592;
   
    return(n1 * value);    
};

kg = change(pounds);
console.log(pounds, ' Libras = ', kg, ' Kilogramos');