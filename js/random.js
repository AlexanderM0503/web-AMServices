function GetRandom(min, max)
{
    return Math.trunc(Math.random() * (max - min) + min);
}

function randomBtn_Click()
{
    let min = parseInt(minValue.value);
    let max = parseInt(maxValue.value) + 1;
    randomResult.value = GetRandom(min, max);
}
