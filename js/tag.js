var step = 0; // 0 - stop, 1 - game, 2 - win

function GetRandom(min, max)
{
    return Math.trunc(Math.random() * (max - min) + min);
}

function GetNumArray()
{
    let x = 0;
    let bool = false;
    let numArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i = 0;

    while (i < 15)
    {
        x = GetRandom(1, 16);

        for (let i1 = 0; i1 < 15; i1++)
        {
            if (x == numArray[i1]) { bool = true; }
        }

        if (bool == false) { numArray[i] = x; i++; }
        bool = false;
    }

    return numArray;
}

function startBtn_Click()
{
    let numArray = GetNumArray();

    step = 1;
    gameStatus.value = "Игра начата";

    tag0.value = numArray[0];
    tag1.value = numArray[1];
    tag2.value = numArray[2];
    tag3.value = numArray[3];
    tag4.value = numArray[4];
    tag5.value = numArray[5];
    tag6.value = numArray[6];
    tag7.value = numArray[7];
    tag8.value = numArray[8];
    tag9.value = numArray[9];
    tag10.value = numArray[10];
    tag11.value = numArray[11];
    tag12.value = numArray[12];
    tag13.value = numArray[13];
    tag14.value = numArray[14];
    tag15.value = " ";
}

function stopBtn_Click()
{
    step = 0;
    gameStatus.value = "Игра не начата";

    tag0.value = "1";
    tag1.value = "2";
    tag2.value = "3";
    tag3.value = "4";
    tag4.value = "5";
    tag5.value = "6";
    tag6.value = "7";
    tag7.value = "8";
    tag8.value = "9";
    tag9.value = "10";
    tag10.value = "11";
    tag11.value = "12";
    tag12.value = "13";
    tag13.value = "14";
    tag14.value = "15";
    tag15.value = " ";
}

function tag_Click(tagNum)
{
    if (step == 1)
    {
        let xx1 = tag0;
        let yy1 = tag1;
        let yy = 0;
        let i = " ";

        if (tagNum == 0) { xx1 = tag0; }
        if (tagNum == 1) { xx1 = tag1; }
        if (tagNum == 2) { xx1 = tag2; }
        if (tagNum == 3) { xx1 = tag3; }
        if (tagNum == 4) { xx1 = tag4; }
        if (tagNum == 5) { xx1 = tag5; }
        if (tagNum == 6) { xx1 = tag6; }
        if (tagNum == 7) { xx1 = tag7; }
        if (tagNum == 8) { xx1 = tag8; }
        if (tagNum == 9) { xx1 = tag9; }
        if (tagNum == 10) { xx1 = tag10; }
        if (tagNum == 11) { xx1 = tag11; }
        if (tagNum == 12) { xx1 = tag12; }
        if (tagNum == 13) { xx1 = tag13; }
        if (tagNum == 14) { xx1 = tag14; }
        if (tagNum == 15) { xx1 = tag15; }

        if (tag0.value == " ") { yy1 = tag0; yy = 0; }
        if (tag1.value == " ") { yy1 = tag1; yy = 1; }
        if (tag2.value == " ") { yy1 = tag2; yy = 2; }
        if (tag3.value == " ") { yy1 = tag3; yy = 3; }
        if (tag4.value == " ") { yy1 = tag4; yy = 4; }
        if (tag5.value == " ") { yy1 = tag5; yy = 5; }
        if (tag6.value == " ") { yy1 = tag6; yy = 6; }
        if (tag7.value == " ") { yy1 = tag7; yy = 7; }
        if (tag8.value == " ") { yy1 = tag8; yy = 8; }
        if (tag9.value == " ") { yy1 = tag9; yy = 9; }
        if (tag10.value == " ") { yy1 = tag10; yy = 10; }
        if (tag11.value == " ") { yy1 = tag11; yy = 11; }
        if (tag12.value == " ") { yy1 = tag12; yy = 12; }
        if (tag13.value == " ") { yy1 = tag13; yy = 13; }
        if (tag14.value == " ") { yy1 = tag14; yy = 14; }
        if (tag15.value == " ") { yy1 = tag15; yy = 15; }

        if (tagNum == 0 && (yy == 1 || yy == 4)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 1 && (yy == 0 || yy == 5 || yy == 2 )) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 2 && (yy == 1 || yy == 6 || yy == 3 )) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 3 && (yy == 2 || yy == 7)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        
        if (tagNum == 12 && (yy == 8 || yy == 13)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 13 && (yy == 12 || yy == 9 || yy == 14)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 14 && (yy == 13 || yy == 10 || yy == 15)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 15 && (yy == 14 || yy == 11)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }

        if (tagNum == 4 && (yy == 0 || yy == 5 || yy == 8)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 5 && (yy == 4 || yy == 1 || yy == 9 || yy == 6)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 6 && (yy == 5 || yy == 2 || yy == 10 || yy == 7)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 7 && (yy == 6 || yy == 3 || yy == 11)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }

        if (tagNum == 8 && (yy == 4 || yy == 9 || yy == 12)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 9 && (yy == 8 || yy == 5 || yy == 13 || yy == 10)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 10 && (yy == 9 || yy == 6 || yy == 14 || yy == 11)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (tagNum == 11 && (yy == 10 || yy == 7 || yy == 15)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        
        GetWinner();
    }
}

function GetWinner()
{
    if
    (
        (tag0.value == "1") &&
        (tag1.value == "2") &&
        (tag2.value == "3") &&
        (tag3.value == "4") &&
        (tag4.value == "5") &&
        (tag5.value == "6") &&
        (tag6.value == "7") &&
        (tag7.value == "8") &&
        (tag8.value == "9") &&
        (tag9.value == "10") &&
        (tag10.value == "11") &&
        (tag11.value == "12") &&
        (tag12.value == "13") &&
        (tag13.value == "14") &&
        (tag14.value == "15")
    )
    { 
        gameStatus.value = "Вы выиграли!";
        step = 2; 
    }
}
