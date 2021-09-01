function upload(){
    document.querySelector(".btn-primary").click();
    document.querySelector("#complete").style="opacity:1 !important;";
    document.querySelector("#complete").disable = false;
}

function showThankyou(){
    document.querySelector('.popUp').style="display:flex;"
}

function finish(){
    location.replace("/careers");
}