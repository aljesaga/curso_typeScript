

let words:string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']
function Max_length(str:string[]):string
{   
    let nl:number = 0;

    for(let i = 1; i < str.length; i++)
    {
        if (str[nl].length < str[i].length)
            nl = i;
    }
    return(str[nl]);
};

let word = Max_length(words);
console.log(word);
