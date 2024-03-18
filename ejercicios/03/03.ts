
let base:number = 10;
let height:number = 5;

function triangle_rectangle_area( base:number, height:number):number
{   
    return((base * height) / 2);    
};

let area = triangle_rectangle_area(base, height);
console.log('El area del rectangulo es ', area);