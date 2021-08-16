function agree(){
    document.querySelector('.popUp').style = "display:none;"
    document.querySelector('.registerBtn').style = "opacity:1;";
    document.querySelector('.registerBtn').disabled = false;
}

function popUp(){
    document.querySelector('.popUp').style = "display:flex;"
}