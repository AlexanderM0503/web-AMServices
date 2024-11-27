var step = 0; //0 - stop, 1 - +, 2 - O, 3 - win

function changeNames_Click()
{
    let name1 = playerName1.value;
    let name2 = playerName2.value;

    playerName1.value = name2;
    playerName2.value = name1;
}

function reset()
{
    ttt0.src = "./img/tictactoe/0.png";
    ttt1.src = "./img/tictactoe/0.png";
    ttt2.src = "./img/tictactoe/0.png";
    ttt3.src = "./img/tictactoe/0.png";
    ttt4.src = "./img/tictactoe/0.png";
    ttt5.src = "./img/tictactoe/0.png";
    ttt6.src = "./img/tictactoe/0.png";
    ttt7.src = "./img/tictactoe/0.png";
    ttt8.src = "./img/tictactoe/0.png";
    ttt0.value = "0";
    ttt1.value = "0";
    ttt2.value = "0";
    ttt3.value = "0";
    ttt4.value = "0";
    ttt5.value = "0";
    ttt6.value = "0";
    ttt7.value = "0";
    ttt8.value = "0";
}

function startBtn_Click()
{
    step = 1;
    gameStatus.value = "Игра начата";
    reset();
}

function stopBtn_Click()
{
    step = 0;
    gameStatus.value = "Игра не начата";
    reset();
}

function ttt_Click(tttNum)
{
    if (tttNum == 0 && ttt0.value == "0" && step == 1)
    {
        ttt0.src = "./img/tictactoe/1.png";
        ttt0.value = "1";
        step = 2;
    }
    else if (tttNum == 0 && ttt0.value == "0" && step == 2)
    {
        ttt0.src = "./img/tictactoe/2.png";
        ttt0.value = "2";
        step = 1;
    }

    if (tttNum == 1 && ttt1.value == "0" && step == 1)
    {
        ttt1.src = "./img/tictactoe/1.png";
        ttt1.value = "1";
        step = 2;
    }
    else if (tttNum == 1 && ttt1.value == "0" && step == 2)
    {
        ttt1.src = "./img/tictactoe/2.png";
        ttt1.value = "2";
        step = 1;
    }

    if (tttNum == 2 && ttt2.value == "0" && step == 1)
    {
        ttt2.src = "./img/tictactoe/1.png";
        ttt2.value = "1";
        step = 2;
    }
    else if (tttNum == 2 && ttt2.value == "0" && step == 2)
    {
        ttt2.src = "./img/tictactoe/2.png";
        ttt2.value = "2";
        step = 1;
    }

    if (tttNum == 3 && ttt3.value == "0" && step == 1)
    {
        ttt3.src = "./img/tictactoe/1.png";
        ttt3.value = "1";
        step = 2;
    }
    else if (tttNum == 3 && ttt3.value == "0" && step == 2)
    {
        ttt3.src = "./img/tictactoe/2.png";
        ttt3.value = "2";
        step = 1;
    }

    if (tttNum == 4 && ttt4.value == "0" && step == 1)
    {
        ttt4.src = "./img/tictactoe/1.png";
        ttt4.value = "1";
        step = 2;
    }
    else if (tttNum == 4 && ttt4.value == "0" && step == 2)
    {
        ttt4.src = "./img/tictactoe/2.png";
        ttt4.value = "2";
        step = 1;
    }

    if (tttNum == 5 && ttt5.value == "0" && step == 1)
    {
        ttt5.src = "./img/tictactoe/1.png";
        ttt5.value = "1";
        step = 2;
    }
    else if (tttNum == 5 && ttt5.value == "0" && step == 2)
    {
        ttt5.src = "./img/tictactoe/2.png";
        ttt5.value = "2";
        step = 1;
    }

    if (tttNum == 6 && ttt6.value == "0" && step == 1)
    {
        ttt6.src = "./img/tictactoe/1.png";
        ttt6.value = "1";
        step = 2;
    }
    else if (tttNum == 6 && ttt6.value == "0" && step == 2)
    {
        ttt6.src = "./img/tictactoe/2.png";
        ttt6.value = "2";
        step = 1;
    }

    if (tttNum == 7 && ttt7.value == "0" && step == 1)
    {
        ttt7.src = "./img/tictactoe/1.png";
        ttt7.value = "1";
        step = 2;
    }
    else if (tttNum == 7 && ttt7.value == "0" && step == 2)
    {
        ttt7.src = "./img/tictactoe/2.png";
        ttt7.value = "2";
        step = 1;
    }

    if (tttNum == 8 && ttt8.value == "0" && step == 1)
    {
        ttt8.src = "./img/tictactoe/1.png";
        ttt8.value = "1";
        step = 2;
    }
    else if (tttNum == 8 && ttt8.value == "0" && step == 2)
    {
        ttt8.src = "./img/tictactoe/2.png";
        ttt8.value = "2";
        step = 1;
    }

    GetWinner();
}

function GetWinner()
{
    if (
        (ttt0.value == "1" && ttt1.value == "1" && ttt2.value == "1") ||
        (ttt3.value == "1" && ttt4.value == "1" && ttt5.value == "1") ||
        (ttt6.value == "1" && ttt7.value == "1" && ttt8.value == "1") ||
        (ttt0.value == "1" && ttt3.value == "1" && ttt6.value == "1") ||
        (ttt1.value == "1" && ttt4.value == "1" && ttt7.value == "1") ||
        (ttt2.value == "1" && ttt5.value == "1" && ttt8.value == "1") ||
        (ttt0.value == "1" && ttt4.value == "1" && ttt8.value == "1") ||
        (ttt2.value == "1" && ttt4.value == "1" && ttt6.value == "1")
    )
    {
        gameStatus.value = playerName1.value + " победил";
        step = 3;
    }

    if (
        (ttt0.value == "2" && ttt1.value == "2" && ttt2.value == "2") ||
        (ttt3.value == "2" && ttt4.value == "2" && ttt5.value == "2") ||
        (ttt6.value == "2" && ttt7.value == "2" && ttt8.value == "2") ||
        (ttt0.value == "2" && ttt3.value == "2" && ttt6.value == "2") ||
        (ttt1.value == "2" && ttt4.value == "2" && ttt7.value == "2") ||
        (ttt2.value == "2" && ttt5.value == "2" && ttt8.value == "2") ||
        (ttt0.value == "2" && ttt4.value == "2" && ttt8.value == "2") ||
        (ttt2.value == "2" && ttt4.value == "2" && ttt6.value == "2")
    )
    {
        gameStatus.value = playerName2.value + " победил";
        step = 3;
    }
}
