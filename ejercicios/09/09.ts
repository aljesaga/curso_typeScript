

let words:string[] = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

function initWith(str:string[], C:string):string[]
{   
    let Sstr:string[] = [];

    for(let i = 1; i < str.length; i++)
    {
        if (str[i].startsWith(C))
            Sstr.push(str[i]);
    }
    return(Sstr);
};

let word:string[] = initWith(words, 'D');
console.log(word);
