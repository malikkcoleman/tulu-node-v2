// Header Animation ------------------------------------------------------------------------

const headerName = document.querySelector('.headerName');
const jobTitle = document.querySelector('.jobTitle');
const socialMediaList1 = document.querySelector('.socialMediaList1');
const socialMediaList2 = document.querySelector('.socialMediaList2');
const socialMediaList3 = document.querySelector('.socialMediaList3');
const socialMediaList4 = document.querySelector('.socialMediaList4');
const socialMediaList5 = document.querySelector('.socialMediaList5');
const navigation = document.querySelector('.navigation');
const arrowDown = document.querySelector('.arrowDown');

headerName.style = "opacity:0; transform:translateY(-50vh) skew(50deg,100deg); text-shadow: 100px 100px 10px black;";
jobTitle.style = "opacity:0;";
socialMediaList1.style = "opacity:0; transform:translateY(50vh);";
socialMediaList2.style = "opacity:0; transform:translateY(50vh);";
socialMediaList3.style = "opacity:0; transform:translateY(50vh);";
socialMediaList4.style = "opacity:0; transform:translateY(50vh);";
socialMediaList5.style = "opacity:0; transform:translateY(50vh);";
navigation.style = "opacity:0;"
arrowDown.style = "opacity:0"

function functHeaderName() {
    headerName.style = "opacity:1; transform:translateY(0vh); transition:0.5s ease-in;";
}setTimeout(functHeaderName, 500);

function functHeaderNameBounceUp() {
    headerName.style = "opacity:1; transform:translateY(-5vh) skew(2deg,2deg); transition:0.1s ease-out;";
}setTimeout(functHeaderNameBounceUp, 1000);

function functHeaderNameBounceDown() {
    headerName.style = "opacity:1; transform:translateY(0vh); transition:0.2s ease-in;";
}setTimeout(functHeaderNameBounceDown, 1100);

function functHeaderNameBounceUp2() {
    headerName.style = "opacity:1; transform:translateY(-2vh) skew(0.5deg,0.5deg); transition:0.1s ease-out;";
    setTimeout(functHeaderNameBounceDown,100);
}setTimeout(functHeaderNameBounceUp2, 1300);

function functjobTitle() {
    jobTitle.style = "opacity:1; transition:0.9s;";
}setTimeout(functjobTitle, 1000);

function functsocialMediaList1() {
    socialMediaList1.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
}setTimeout(functsocialMediaList1, 1400);

function functsocialMediaList2() {
    socialMediaList2.style = "opacity:1; transform:translateY(0vh); transition:0.9s;";
}setTimeout(functsocialMediaList2, 1500);

function functsocialMediaList3() {
    socialMediaList3.style = "opacity:1; transform:translateY(0vh); transition:0.9s;";
}setTimeout(functsocialMediaList3, 1600);

function functsocialMediaList4() {
    socialMediaList4.style = "opacity:1; transform:translateY(0vh); transition:0.9s;";
}setTimeout(functsocialMediaList4, 1700);

function functsocialMediaList5() {
    socialMediaList5.style = "opacity:1; transform:translateY(0vh); transition:0.9s;";
}setTimeout(functsocialMediaList5, 1800);

function functnavigation() {
    navigation.style = "opacity:1; transition:0.9s;";
}setTimeout(functnavigation, 2000);

function functarrowDown() {
    arrowDown.style = "opacity:1;"
    functarrowDown()
}setTimeout(functarrowDown, 2000);

function functarrowDown() {
    arrowDown.style = "transform: translateY(10px); opacity:0.2; transition:0.9s;";
    setTimeout(functarrowDown2, 900)
}

function functarrowDown2() {
    arrowDown.style = "transform: translateY(0px); opacity:0.5; transition:0.9s;";
    setTimeout(functarrowDown, 900)
}

//First Section ------------------------------------------------------------------------

document.querySelector('body').onscroll = function() {functScroll()};
const frontEndFocused = document.querySelector('.frontEndFocused');
const experience = document.querySelector('.experience');
const skillSet1 = document.querySelector('#skillSet1');
const skillSet2 = document.querySelector('#skillSet2');
const skillSet3 = document.querySelector('#skillSet3');
const skillSet4 = document.querySelector('#skillSet4');
const skillSet5 = document.querySelector('#skillSet5');
const skillSet6 = document.querySelector('#skillSet6');
const skillSet7 = document.querySelector('#skillSet7');
const skillSet8 = document.querySelector('#skillSet8');
const skillSet9 = document.querySelector('#skillSet9');
const skillSet10 = document.querySelector('#skillSet10');
const quote = document.querySelector('.quote');

frontEndFocused.style = "opacity:0; transform:translateY(-10vh);"
experience.style = "opacity:0; transform:translateY(10vh);"
skillSet1.style = "opacity:0; transform:translateY(10vh);"
skillSet2.style = "opacity:0; transform:translateY(10vh);"
skillSet3.style = "opacity:0; transform:translateY(10vh);"
skillSet4.style = "opacity:0; transform:translateY(10vh);"
skillSet5.style = "opacity:0; transform:translateY(10vh);"
skillSet6.style = "opacity:0; transform:translateY(10vh);"
skillSet7.style = "opacity:0; transform:translateY(10vh);"
skillSet8.style = "opacity:0; transform:translateY(10vh);"
skillSet9.style = "opacity:0; transform:translateY(10vh);"
skillSet10.style = "opacity:0; transform:translateY(10vh);"
quote.style = "opacity:0;"

// On scroll animation

var x = 0;
function functScroll() {
    x++;
    if(x == 10){
        frontEndFocused.style = "opacity:1; transition:0.9s; transform:translateY(0vh)"
        experience.style = "opacity:1; transition:0.9s; transform:translateY(0vh);"
        functskillSet1();
    }
}

function functskillSet1() {
    skillSet1.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet2, 100);
    setTimeout(functskillSet1FloatUp, 600);
}

function functskillSet2() {
    skillSet2.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet3, 100);
    setTimeout(functskillSet2FloatUp, 600);
}

function functskillSet3() {
    skillSet3.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet4, 100);
    setTimeout(functskillSet3FloatUp, 600);
}

function functskillSet4() {
    skillSet4.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet5, 100);
    setTimeout(functskillSet4FloatUp, 600);
}

function functskillSet5() {
    skillSet5.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet6, 100);
    setTimeout(functskillSet5FloatUp, 600);
}

function functskillSet6() {
    skillSet6.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet7, 100);
    setTimeout(functskillSet6FloatUp, 600);
}

function functskillSet7() {
    skillSet7.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet8, 100);
    setTimeout(functskillSet7FloatUp, 600);
}

function functskillSet8() {
    skillSet8.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet9, 100);
    setTimeout(functskillSet8FloatUp, 600);
}

function functskillSet9() {
    skillSet9.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functskillSet10, 100);
    setTimeout(functskillSet9FloatUp, 600);
}

function functskillSet10() {
    skillSet10.style = "opacity:1; transform:translateY(0vh); transition:0.6s";
    setTimeout(functquote, 100);
    setTimeout(functskillSet10FloatUp, 600);
}

function functquote(){
    quote.style = "opacity:1; transition:0.4s;"
}

function functskillSet1FloatUp() {
    skillSet1.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet1FloatDown, 900)
}

function functskillSet1FloatDown() {
    skillSet1.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet1FloatUp, 900);
};

function functskillSet2FloatUp() {
    skillSet2.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet2FloatDown, 900)
}

function functskillSet2FloatDown() {
    skillSet2.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet2FloatUp, 900);
};

function functskillSet3FloatUp() {
    skillSet3.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet3FloatDown, 900)
}

function functskillSet3FloatDown() {
    skillSet3.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet3FloatUp, 900);
};

function functskillSet4FloatUp() {
    skillSet4.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet4FloatDown, 900)
}

function functskillSet4FloatDown() {
    skillSet4.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet4FloatUp, 900);
};

function functskillSet5FloatUp() {
    skillSet5.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet5FloatDown, 900)
}

function functskillSet5FloatDown() {
    skillSet5.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet5FloatUp, 900);
};

function functskillSet6FloatUp() {
    skillSet6.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet6FloatDown, 900)
}

function functskillSet6FloatDown() {
    skillSet6.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet6FloatUp, 900);
};

function functskillSet7FloatUp() {
    skillSet7.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet7FloatDown, 900)
}

function functskillSet7FloatDown() {
    skillSet7.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet7FloatUp, 900);
};

function functskillSet8FloatUp() {
    skillSet8.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet8FloatDown, 900)
}

function functskillSet8FloatDown() {
    skillSet8.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet8FloatUp, 900);
};

function functskillSet9FloatUp() {
    skillSet9.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet9FloatDown, 900)
}

function functskillSet9FloatDown() {
    skillSet9.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet9FloatUp, 900);
};

function functskillSet10FloatUp() {
    skillSet10.style = "opacity:1; transform:translateY(-1vh); transition:0.9s";
    setTimeout(functskillSet10FloatDown, 900)
}

function functskillSet10FloatDown() {
    skillSet10.style = "opacity:1; transform:translateY(0vh); transition:0.9s";
    setTimeout(functskillSet10FloatUp, 900);
};


// Second Section  ------------------------------------------------------------------------

// const character = document.querySelector('.character');
// const character2 = document.querySelector('.character2');
// var idle = 0;

// function functIdle() {
//     if(idle==0){
//         // character.src = "PNG/character2.png"
//         idle++;
//         setTimeout(functIdle, 200);
//     }
//     else{
//         // character.src = "PNG/character.png"
//         idle=0;
//         setTimeout(functIdle, 200);
//     }
// }setTimeout(functIdle, 500);