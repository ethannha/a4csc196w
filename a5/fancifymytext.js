function makeBigger() {
    alert("Font size will be increased!");
    document.getElementById("inputText1").style.fontSize = "24pt";
}

function changeRadio1() {
    alert("Font will now be styled!");
    document.getElementById("inputText1").style.fontWeight = "bold";
    document.getElementById("inputText1").style.color = "blue";
    document.getElementById("inputText1").style.textDecoration = "underline";
}

function changeRadio2() {
    document.getElementById("inputText1").style.fontWeight = "";
    document.getElementById("inputText1").style.color = "";
    document.getElementById("inputText1").style.textDecoration = "";
}

function changeMoo() {
    var string = document.getElementById("inputText1").value;   //change words to uppercase
    var upperCaseString = string.toUpperCase();
    document.getElementById("inputText1").value = upperCaseString;
    mooSuffix();    //change periods to -Moo
}

function mooSuffix() {
    var string = document.getElementById("inputText1").value;
    var parts = string.split(".");
    string = parts.join(".-Moo");
    document.getElementById("inputText1").value = string;
}