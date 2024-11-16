function NumberFactorization(vle)
{
    let numberFactor = new Array();
    let value = parseInt(vle);
    let value1 = 0;
    let i = 2;

    if (value > 1)
    {
        while (value != 1)
        {
            if ((value % i) == 0)
            {
                value1 = value / i;
                numberFactor.push(i);
                i = 2;
                value = parseInt(value1);
            }
            else
            {
                i += 1;
            }
        }
    }
    else
    {
        numberFactor.push(0);
    }

    return numberFactor;
}

function factorBtn_Click()
{
    let result = NumberFactorization(numValue.value);
    factorResult.value = "";

    for (let i = 0; i < result.length; i++)
    {
        factorResult.value += (i + 1).toString() + ") " + (result[i]).toString() + '\n';
    }
}
