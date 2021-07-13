const head = document.querySelector('.head');
const eyes = document.querySelector('.eyes');
var blink = 0;
var idle = 0;


function eyesBlink(){
    if(idle<=5){
        head.style = "top:15.3vw; transition:0.2s;"
        idle++;
    }else{
        head.style = "top:15vw; transition:0.2s;"
        idle=0;
    }

    if(blink <= 10){
        eyes.style = "height:3vw; transition:0.2s;"
        blink++;
        setTimeout(eyesBlink, 200);
    }else{
        eyes.style = "height:0vw; top:22vw; transition:0.2s;"
        blink=0;
        setTimeout(eyesBlink, 200);
    }

}setTimeout(eyesBlink, 200);


