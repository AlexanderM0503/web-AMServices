function GetRandom(min, max)
{
    return Math.trunc(Math.random() * (max - min) + min);
}

function SetNumChar(vle)
{
    if (vle == 1 && numChar.value < 255)
    {
        numChar.value = numChar.value - (-1);
    }
    if (vle == -1 && numChar.value > 1)
    {
        numChar.value = numChar.value - 1;
    }
    if (vle > 1)
    {
        numChar.value = vle;
    }
}

function GetCharUp()
{
    const charUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return charUp[GetRandom(0, 26)];
}

function GetCharLow()
{
    const charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return charLow[GetRandom(0, 26)];
}

function GetDigit()
{
    const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return digit[GetRandom(0, 10)];
}

function GetSpChar()
{
    const spChar =[ "!", "'", "$", "%", "&", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "`" ];
    return spChar[GetRandom(0, 28)];
}

function GetPasswdChar()
{
    let x = GetRandom(0, 4);
    let pChar = "";

    if ((x == 0) && (charUp.checked))
    {
        pChar = GetCharUp();
    }
    if ((x == 1) && (charLow.checked))
    {
        pChar = GetCharLow();
    }
    if ((x == 2) && (digit.checked))
    {
        pChar = GetDigit();
    }
    if ((x == 3) && (spChar.checked))
    {
        pChar = GetSpChar();
    }

    return pChar;
}

function GetPassword()
{
    let passStr = "";
    let passStrLenght = numChar.value;

    if (charUp.checked || charLow.checked || digit.checked || spChar.checked)
    {
        while (passStr.length < passStrLenght)
        {
            passStr += GetPasswdChar();
        }
    
        passwd.value = passStr;
    }
    else
    {
        passwd.value = "Не выбраны типы символов";
    }
}
