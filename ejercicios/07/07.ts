
function Max(a:number, b:number, c:number)
{   
    let ret:number = a;

        if (ret < b)
            ret = b;
        if (ret < c)
            ret = c
        return(ret);
};

let nummax = Max(9, 8, 10);
console.log(nummax);
