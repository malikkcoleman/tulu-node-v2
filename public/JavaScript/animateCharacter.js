const characterContainer = document.querySelector('.characterContainer');
const shadow = document.querySelector('.shadow');
const torso = document.querySelector('.torso');
const rightArm = document.querySelector('.rightArm');
const rightLeg = document.querySelector('.rightLeg');
const leftArm = document.querySelector('.leftArm');
const leftLeg = document.querySelector('.leftLeg');
const ground = document.querySelector('.ground');
const frontPlants = document.querySelector('.frontPlants');
const backPlants = document.querySelector('.backPlants');
const frontTrees = document.querySelector('.frontTrees');
const backTrees = document.querySelector('.backTrees');

const Random = document.querySelector('.Random');
const papajohns = document.querySelector('.papajohns');
const mcd = document.querySelector('.mcd');
const lubecity = document.querySelector('.lubecity');
const wanted = document.querySelector('.wanted');
const decalCityBoard = document.querySelector('.decalCityBoard');
const education = document.querySelector('.education');
const skills2 = document.querySelector('.skills2');
const skills1 = document.querySelector('.skills1');
const skills = document.querySelector('.skills');
const oil = document.querySelector('.oil');
const crate2 = document.querySelector('.crate2');
const crate1 = document.querySelector('.crate1');
const chicken = document.querySelector('.chicken');
const educationBoard = document.querySelector('.educationBoard');
const aboutBoard = document.querySelector('.aboutBoard');
const workBoard = document.querySelector('.workBoard');
const frontEndBoard = document.querySelector('.frontEndBoard');

var direction;
var animate = "idle";
var jump = "false";
var idle = 0;

function idleStart() {

    //WALKING
    if(animate == 'walk'){
        if(idle==0){
            torso.style = "transform: translateY(-155px) translateX(-60px) scale(0.5); position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(5px) rotate(-10deg) translateX(5px) scale(0.5); position:absolute; transition:0.9s;";
            leftArm.style = "transform: translateY(10px)  rotate(10deg) translateX(85px) scale(0.5); position:absolute; transition:0.9s;";
            rightLeg.style = "transform: translateY(100px) translateX(5px) scale(0.5); position:absolute; transition:0.09s;";
            leftLeg.style = "transform: translateY(100px) translateX(65px) scale(0.5); position:absolute; transition:0.09s;";
            idle++;
            setTimeout(idleStart, 200);
        }
        else{
            torso.style = "transform: translateY(-145px) translateX(-60px) scale(0.5) ;position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(15px) rotate(10deg) translateX(5px) scale(0.5); position:absolute; transition:0.9s;";
            leftArm.style = "transform: translateY(20px) rotate(-10deg) translateX(85px) scale(0.5); position:absolute; transition:0.9s;";
            rightLeg.style = "transform: translateY(100px) translateX(30px) scale(0.5); position:absolute; transition:0.09s;";
            leftLeg.style = "transform: translateY(100px) translateX(45px) scale(0.5); position:absolute; transition:0.09s;";
            
            idle=0;
            setTimeout(idleStart, 200);
        }
    }else if(animate == 'idle'){
        if(idle==0){
            torso.style = "transform: translateY(-155px) translateX(-60px) scale(0.5); position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(5px) rotate(0deg) translateX(5px) scale(0.5); position:absolute; transition:0.4s;";
            leftArm.style = "transform: translateY(10px)  rotate(0deg) translateX(85px) scale(0.5); position:absolute; transition:0.4s;";
            rightLeg.style = "transform: translateY(100px) translateX(5px) scale(0.5); position:absolute; transition:0.1s;";
            leftLeg.style = "transform:translateY(100px) translateX(65px) scale(0.5); position:absolute; transition:0.1s;";
            idle++;
            setTimeout(idleStart, 900);
        }
        else{
            torso.style = "transform: translateY(-145px) translateX(-60px) scale(0.5) ;position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(15px) rotate(5deg) translateX(5px) scale(0.5); position:absolute; transition:0.9s;";
            leftArm.style = "transform: translateY(20px) rotate(-5deg) translateX(85px) scale(0.5); position:absolute; transition:0.9s;";
            rightLeg.style = "transform: translateY(100px) translateX(5px) scale(0.5); position:absolute; transition:0.9s;";
            leftLeg.style = "transform:translateY(100px) translateX(65px) scale(0.5); position:absolute; transition:0.9s;";
            idle=0;
            setTimeout(idleStart, 900);
        }
    }
    else if(animate == 'jump'){
        if(idle==0){
            torso.style = "transform: translateY(-105px) translateX(-60px) scale(0.5); position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(35px) rotate(10deg) translateX(5px) scale(0.5); position:absolute; transition:0.4s;";
            leftArm.style = "transform: translateY(30px)  rotate(10deg) translateX(85px) scale(0.5); position:absolute; transition:0.4s;";
            rightLeg.style = "transform: translateY(100px) translateX(5px) scale(0.5); position:absolute; transition:0.4s;";
            leftLeg.style = "transform:translateY(100px) translateX(65px) scale(0.5); position:absolute; transition:0.9s;";
            idle++;
            setTimeout(idleStart, 400);
        }
        else{
            torso.style = "transform: translateY(-145px) translateX(-60px) scale(0.5) ;position:absolute; transition:0.4s;";
            rightArm.style = "transform: translateY(15px) rotate(-20deg) translateX(25px) scale(0.5); position:absolute; transition:0.4s;";
            leftArm.style = "transform: translateY(50px) rotate(-20deg) translateX(105px) scale(0.5); position:absolute; transition:0.4s;";
            rightLeg.style = "transform: translateY(100px) translateX(5px) scale(0.5); position:absolute; transition:0.4s;";
            leftLeg.style = "transform:translateY(100px) translateX(65px) scale(0.5); position:absolute; transition:0.9s;";
            idle=0;
            setTimeout(idleStart, 400);
        }
    
    }
    else if(animate == 'sit'){
        torso.style = "transform: translateY(-75px) translateX(-50px)  scale(0.5); position:absolute; transition:0.4s;";
        rightArm.style = "transform: translateY(85px) rotate(10deg) translateX(5px) scale(0.5); position:absolute; transition:0.4s;";
        leftArm.style = "transform: translateY(80px)  rotate(10deg) translateX(85px) scale(0.5); position:absolute; transition:0.4s;";
        rightLeg.style = "transform: translateY(120px) translateX(50px) rotate(-90deg) scale(0.5); position:absolute; transition:0.4s;";
        leftLeg.style = "transform:translateY(120px) translateX(90px) rotate(-90deg) scale(0.5); position:absolute; transition:0.4s;";
        idle=0;
        setTimeout(idleStart, 400);
    }
}setTimeout(idleStart, 10) ;




function faceLeft(){
    characterContainer.style = "transform:scaleX(-1) translateX(0);position: relative;";
    shadow.style = "top:220px; width:180px; height:50px; border-radius: 50%; background:black; position:absolute; transform:scaleX(-1) opacity:0.3; transition: 0.2s;";
};

function faceRight(){
    characterContainer.style = "position: relative;";
    shadow.style = "top:220px; width:180px; height:50px; border-radius: 50%; background:black; position:absolute; opacity:0.3; transition: 0.2s;";
};