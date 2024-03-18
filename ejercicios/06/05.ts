
function table_5x5()
{   
    let Y:number = 1;
    let X:number[] = [1, 2, 3, 4, 5];

    while(Y <= 5)
    {
        if (Y !== 1)
            for(let i = 1; i < X.length; i++)
                X[i] = X[0] * (i + 1);
        console.log(X);
        ++Y;
        X[0] = Y;
    }
};

table_5x5();
