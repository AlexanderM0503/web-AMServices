function toHtmlColor(value)
{
    if (value < 16)
    {
        return "0" + Number(value).toString(16);
    }
    else
    {
        return Number(value).toString(16);
    }
}

function colorRng_change()
{
    colorNumRed.value = colorRngRed.value;
    colorNumGreen.value = colorRngGreen.value;
    colorNumBlue.value = colorRngBlue.value;
    colorPreview.style.background = "rgb(" + colorNumRed.value + "," + colorNumGreen.value + "," + colorNumBlue.value + ")";
    htmlColor.value = "#" + toHtmlColor(colorNumRed.value) + toHtmlColor(colorNumGreen.value) + toHtmlColor(colorNumBlue.value);
}

function colorNum_change()
{
    colorRngRed.value = colorNumRed.value;
    colorRngGreen.value = colorNumGreen.value;
    colorRngBlue.value = colorNumBlue.value;
    colorPreview.style.background = "rgb(" + colorNumRed.value + "," + colorNumGreen.value + "," + colorNumBlue.value + ")";
    htmlColor.value = "#" + toHtmlColor(colorNumRed.value) + toHtmlColor(colorNumGreen.value) + toHtmlColor(colorNumBlue.value);
}
