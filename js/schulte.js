var step = 0; // 0 - stop, 1 - game, 2 - win

function GetRandom(min, max)
{
    return Math.trunc(Math.random() * (max - min) + min);
}

function GetNumArray()
{
    let x = 0;
    let bool = false;
    let numArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i = 0;

    while (i < 25)
    {
        x = GetRandom(1, 26);

        for (let i1 = 0; i1 < 25; i1++)
        {
            if (x == numArray[i1]) { bool = true; }
        }

        if (bool == false) { numArray[i] = x; i++; }
        bool = false;
    }

    return numArray;
}

function SetShulteValue(numArray)
{
    schulte0.value = numArray[0];
    schulte1.value = numArray[1];
    schulte2.value = numArray[2];
    schulte3.value = numArray[3];
    schulte4.value = numArray[4];
    schulte5.value = numArray[5];
    schulte6.value = numArray[6];
    schulte7.value = numArray[7];
    schulte8.value = numArray[8];
    schulte9.value = numArray[9];
    schulte10.value = numArray[10];
    schulte11.value = numArray[11];
    schulte12.value = numArray[12];
    schulte13.value = numArray[13];
    schulte14.value = numArray[14];
    schulte15.value = numArray[15];
    schulte16.value = numArray[16];
    schulte17.value = numArray[17];
    schulte18.value = numArray[18];
    schulte19.value = numArray[19];
    schulte20.value = numArray[20];
    schulte21.value = numArray[21];
    schulte22.value = numArray[22];
    schulte23.value = numArray[23];
    schulte24.value = numArray[24];
}

function SetShulteColor(colorVle)
{
    schulte0.style.background = colorVle;
    schulte1.style.background = colorVle;
    schulte2.style.background = colorVle;
    schulte3.style.background = colorVle;
    schulte4.style.background = colorVle;
    schulte5.style.background = colorVle;
    schulte6.style.background = colorVle;
    schulte7.style.background = colorVle;
    schulte8.style.background = colorVle;
    schulte9.style.background = colorVle;
    schulte10.style.background = colorVle;
    schulte11.style.background = colorVle;
    schulte12.style.background = colorVle;
    schulte13.style.background = colorVle;
    schulte14.style.background = colorVle;
    schulte15.style.background = colorVle;
    schulte16.style.background = colorVle;
    schulte17.style.background = colorVle;
    schulte18.style.background = colorVle;
    schulte19.style.background = colorVle;
    schulte20.style.background = colorVle;
    schulte21.style.background = colorVle;
    schulte22.style.background = colorVle;
    schulte23.style.background = colorVle;
    schulte24.style.background = colorVle;
}

function startBtn_Click()
{
    let numArray = GetNumArray();

    step = 1;
    gameStatus.value = "0";

    SetShulteValue(numArray);
    SetShulteColor("white");
}

function stopBtn_Click()
{
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

    step = 0;
    gameStatus.value = "Игра не начата";

    SetShulteValue(numArray);
    SetShulteColor("white");
}

function SchulteGame(numSh)
{
    let btnSh = schulte0;
    let xx = parseInt(gameStatus.value);

    if (step == 1)
    {
        if (numSh == 0) { btnSh = schulte0; }
        if (numSh == 1) { btnSh = schulte1; }
        if (numSh == 2) { btnSh = schulte2; }
        if (numSh == 3) { btnSh = schulte3; }
        if (numSh == 4) { btnSh = schulte4; }
        if (numSh == 5) { btnSh = schulte5; }
        if (numSh == 6) { btnSh = schulte6; }
        if (numSh == 7) { btnSh = schulte7; }
        if (numSh == 8) { btnSh = schulte8; }
        if (numSh == 9) { btnSh = schulte9; }
        if (numSh == 10) { btnSh = schulte10; }
        if (numSh == 11) { btnSh = schulte11; }
        if (numSh == 12) { btnSh = schulte12; }
        if (numSh == 13) { btnSh = schulte13; }
        if (numSh == 14) { btnSh = schulte14; }
        if (numSh == 15) { btnSh = schulte15; }
        if (numSh == 16) { btnSh = schulte16; }
        if (numSh == 17) { btnSh = schulte17; }
        if (numSh == 18) { btnSh = schulte18; }
        if (numSh == 19) { btnSh = schulte19; }
        if (numSh == 20) { btnSh = schulte20; }
        if (numSh == 21) { btnSh = schulte21; }
        if (numSh == 22) { btnSh = schulte22; }
        if (numSh == 23) { btnSh = schulte23; }
        if (numSh == 24) { btnSh = schulte24; }

        if (parseInt(btnSh.value) == xx + 1) 
        {
            xx += 1;
            gameStatus.value = xx.toString();
            btnSh.style.background = "green";

            if (parseInt(schulte0.value) > xx) { schulte0.style.background = "white"; }
            if (parseInt(schulte1.value) > xx) { schulte1.style.background = "white"; }
            if (parseInt(schulte2.value) > xx) { schulte2.style.background = "white"; }
            if (parseInt(schulte3.value) > xx) { schulte3.style.background = "white"; }
            if (parseInt(schulte4.value) > xx) { schulte4.style.background = "white"; }
            if (parseInt(schulte5.value) > xx) { schulte5.style.background = "white"; }
            if (parseInt(schulte6.value) > xx) { schulte6.style.background = "white"; }
            if (parseInt(schulte7.value) > xx) { schulte7.style.background = "white"; }
            if (parseInt(schulte8.value) > xx) { schulte8.style.background = "white"; }
            if (parseInt(schulte9.value) > xx) { schulte9.style.background = "white"; }
            if (parseInt(schulte10.value) > xx) { schulte10.style.background = "white"; }
            if (parseInt(schulte11.value) > xx) { schulte11.style.background = "white"; }
            if (parseInt(schulte12.value) > xx) { schulte12.style.background = "white"; }
            if (parseInt(schulte13.value) > xx) { schulte13.style.background = "white"; }
            if (parseInt(schulte14.value) > xx) { schulte14.style.background = "white"; }
            if (parseInt(schulte15.value) > xx) { schulte15.style.background = "white"; }
            if (parseInt(schulte16.value) > xx) { schulte16.style.background = "white"; }
            if (parseInt(schulte17.value) > xx) { schulte17.style.background = "white"; }
            if (parseInt(schulte18.value) > xx) { schulte18.style.background = "white"; }
            if (parseInt(schulte19.value) > xx) { schulte19.style.background = "white"; }
            if (parseInt(schulte20.value) > xx) { schulte20.style.background = "white"; }
            if (parseInt(schulte21.value) > xx) { schulte21.style.background = "white"; }
            if (parseInt(schulte22.value) > xx) { schulte22.style.background = "white"; }
            if (parseInt(schulte23.value) > xx) { schulte23.style.background = "white"; }
            if (parseInt(schulte24.value) > xx) { schulte24.style.background = "white"; }
        }
        else if (parseInt(btnSh.value) > xx + 1) { btnSh.style.background = "red"; }
    }

    GetWinner();
}

function GetWinner()
{
    if (gameStatus.value == "25")
    {
        step = 2;
        gameStatus.value = "Игра закончена";
    }
}
