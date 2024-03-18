
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

function most_height(numbers:number[]):number
{   
    let N = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] > N)
            N = numbers[i];
    }
    return(N);
};

let nu = most_height(numbers);
console.log('El Numero mas alto es ',nu);