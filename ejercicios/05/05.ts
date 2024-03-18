
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

function pair_or_odd(numbers:number[])
{   
    let N = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i]%2 === 0)
            console.log('Numero ', i, ' del arreglo es Par');
        else
            console.log('Numero ', i, ' del arreglo es Impar');
    }
};

pair_or_odd(numbers);