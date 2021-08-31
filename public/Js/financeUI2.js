var page = 0;

function continueForm(){
    if(page==0){
        document.querySelector('#page0').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==1){
        document.querySelector('#page1').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==2){
        document.querySelector('#page2').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==3){
        document.querySelector('#page3').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==4){
        document.querySelector('#page4').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==5){
        document.querySelector('#page5').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==6){
        document.querySelector('#page6').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==7){
        document.querySelector('#page7').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==8){
        document.querySelector('#page8').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }else if(page==9){
        document.querySelector('#page9').style = "display:flex;opacity:0; transition:0.5s;"
        setTimeout(function(){
            pageCycle()
        },500)
    }
    topFunction();
}

function pageCycle(){
    reset();
    page++;
    displayNextPage();
}

function displayNextPage(){
    if(page==1){
        document.querySelector("#page1").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page1").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==2){
        document.querySelector("#page2").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page2").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==3){
        document.querySelector("#page3").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page3").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==4){
        document.querySelector("#page4").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page4").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==5){
        document.querySelector("#page5").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page5").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==6){
        document.querySelector("#page6").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page6").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==7){
        document.querySelector("#page7").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page7").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==8){
        document.querySelector("#page8").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page8").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==9){
        document.querySelector("#page9").style = "display:flex;opacity:0;";
        setTimeout(function(){
            document.querySelector("#page9").style = "display:flex;opacity:1;transition:0.5s;";  
        },200)
    }else if(page==10){
        document.querySelector('.congratPopUp').style = "display:flex !important;"
        document.querySelector('#popUpBtn').disabled = false;
    }
}

function reset(){
    if(page==0){
        document.querySelector("#page0").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==1){
        document.querySelector("#page1").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==2){
        document.querySelector("#page2").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==3){
        document.querySelector("#page3").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==4){
        document.querySelector("#page4").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==5){
        document.querySelector("#page5").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==6){
        document.querySelector("#page6").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==7){
        document.querySelector("#page7").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==8){
        document.querySelector("#page8").style = "display:none;opacity:0;transition:0.5s;";
    }else if(page==9){
        document.querySelector("#page9").style = "display:none;opacity:0;transition:0.5s;";
    }
}



function selectSuv(){
    resetVehicleType();
    document.querySelector("#vehicleType").value = "SUV";
    document.querySelector(".vehicleTypeSuv").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#vehicleTypeBtn").disabled = false;
}

function selectCar(){
    resetVehicleType();
    document.querySelector("#vehicleType").value = "CAR";
    document.querySelector(".vehicleTypeCar").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#vehicleTypeBtn").disabled = false;
}

function selectTruck(){
    resetVehicleType();
    document.querySelector("#vehicleType").value = "TRUCK";
    document.querySelector(".vehicleTypeTruck").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#vehicleTypeBtn").disabled = false;
}

function selectVan(){
    resetVehicleType();
    document.querySelector("#vehicleType").value = "VAN";
    document.querySelector(".vehicleTypeVan").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#vehicleTypeBtn").disabled = false;
}


function resetVehicleType(){
    document.querySelector(".vehicleTypeVan").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".vehicleTypeTruck").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".vehicleTypeCar").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".vehicleTypeSuv").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}




function budgetOne(){
    resetBudget();
    document.querySelector("#budget").value = "Under $250 / month";
    document.querySelector(".budgetOne").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#budgetBtn").disabled = false;
}

function budgetTwo(){
    resetBudget();
    document.querySelector("#budget").value = "$250 - 374 / month";
    document.querySelector(".budgetTwo").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#budgetBtn").disabled = false;
}

function budgetThree(){
    resetBudget();
    document.querySelector("#budget").value = "$375 - 500 / month";
    document.querySelector(".budgetThree").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#budgetBtn").disabled = false;
}

function budgetFour(){
    resetBudget();
    document.querySelector("#budget").value = "Over $500 / month";
    document.querySelector(".budgetFour").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#budgetBtn").disabled = false;
}


function resetBudget(){
    document.querySelector(".budgetOne").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".budgetTwo").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".budgetThree").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".budgetFour").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}


function tradeOne(){
    resetTrade();
    document.querySelector("#trade").value = "Yes";
    document.querySelector(".tradeOne").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#tradeBtn").disabled = false;
}

function tradeTwo(){
    resetTrade();
    document.querySelector("#trade").value = "No";
    document.querySelector(".tradeTwo").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#tradeBtn").disabled = false;
}

function tradeThree(){
    resetTrade();
    document.querySelector("#trade").value = "Unsure";
    document.querySelector(".tradeThree").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#tradeBtn").disabled = false;
}

function resetTrade(){
    document.querySelector(".tradeOne").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".tradeTwo").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".tradeThree").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}


function creditOne(){
    resetCredit();
    document.querySelector("#creditScore").value = "Good (Over 650)";
    document.querySelector(".creditOne").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#creditScoreBtn").disabled = false;
}

function creditTwo(){
    resetCredit();
    document.querySelector("#creditScore").value = "Fair (550-650)";
    document.querySelector(".creditTwo").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#creditScoreBtn").disabled = false;
}

function creditThree(){
    resetCredit();
    document.querySelector("#creditScore").value = "Poor (Under 550)";
    document.querySelector(".creditThree").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#creditScoreBtn").disabled = false;
}

function creditFour(){
    resetCredit();
    document.querySelector("#creditScore").value = "Current Bankruptcy";
    document.querySelector(".creditFour").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#creditScoreBtn").disabled = false;
}

function creditFive(){
    resetCredit();
    document.querySelector("#creditScore").value = "No Credit / Unsure";
    document.querySelector(".creditFive").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#creditScoreBtn").disabled = false;
}

function resetCredit(){
    document.querySelector(".creditOne").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".creditTwo").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".creditThree").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".creditFour").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".creditFive").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}



function employmentOne(){
    resetEmployment();
    document.querySelector("#employment").value = "Employed";
    document.querySelector(".employmentOne").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#employmentBtn").disabled = false;
    
}

function employmentTwo(){
    resetEmployment();
    document.querySelector("#employment").value = "Self-Employed";
    document.querySelector(".employmentTwo").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#employmentBtn").disabled = false;
}

function employmentThree(){
    resetEmployment();
    document.querySelector("#employment").value = "Student";
    document.querySelector(".employmentThree").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#employmentBtn").disabled = false;
}

function employmentFour(){
    resetEmployment();
    document.querySelector("#employment").value = "Retired / Pension";
    document.querySelector(".employmentFour").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#employmentBtn").disabled = false;
}

function employmentFive(){
    resetEmployment();
    document.querySelector("#employment").value = "Other";
    document.querySelector(".employmentFive").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#employmentBtn").disabled = false;
}

function resetEmployment(){
    document.querySelector(".employmentOne").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".employmentTwo").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".employmentThree").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".employmentFour").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".employmentFive").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}


function incomeOne(){
    resetIncome();
    document.querySelector("#incomeDetails").value = "I Know my annual income";
    document.querySelector(".incomeOne").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#incomeDetailsBtn").disabled = false;
}

function incomeTwo(){
    resetIncome();
    document.querySelector("#incomeDetails").value = "I know my hourly wage";
    document.querySelector(".incomeTwo").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#incomeDetailsBtn").disabled = false;
}

function incomeThree(){
    resetIncome();
    document.querySelector("#incomeDetails").value = "I know my monthly income";
    document.querySelector(".incomeThree").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#incomeDetailsBtn").disabled = false;
}

function incomeFour(){
    resetIncome();
    document.querySelector("#incomeDetails").value = "Other";
    document.querySelector(".incomeFour").style = "border:2px solid #14bf98;border-bottom:5px solid #14bf98;transition:0.5s;"
    document.querySelector("#incomeDetailsBtn").disabled = false;
}

function resetIncome(){
    document.querySelector(".incomeOne").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".incomeTwo").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".incomeThree").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
    document.querySelector(".incomeFour").style = "border:2px solid #00000031;border-bottom:5px solid #00000031;transition:0.5s;"
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-582993231/BRMWCMXUqpMCEM-K_5UC',
      'event_callback': callback
  });
  return false;
}

function Done(){
    
    // gtag_report_converstion("https://www.tulucanada.com/web/finance");
    
    const condition = document.querySelector("#condition").value;
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;
    var method = null;
    
    if(document.querySelector("#radioPhone").checked = true){
        method = "phone";
    }else{
        method = "email";
    }
    
    
    const vehicleType = document.querySelector("#vehicleType").value;
    const budget = document.querySelector("#budget").value;
    const trade = document.querySelector("#trade").value;
    const creditScore = document.querySelector("#creditScore").value;
    const employment = document.querySelector("#employment").value;
    const incomeDetails = document.querySelector("#incomeDetails").value;
    const hourly = document.querySelector("#hourly").value;
    const employer = document.querySelector("#employer").value;
    const emailConsent = document.querySelector("#emailConsent").value;
    const privacyConsent = document.querySelector("#privacyConsent").value;
    
    var postValues = {};
    
    postValues.fname = fname;
    postValues.lname = lname;
    postValues.email = email;
    postValues.condition = condition;
    postValues.number = number;
    postValues.radio = method;
    postValues.vehicleType = vehicleType;
    postValues.budget = budget;
    postValues.trade = trade;
    postValues.creditScore = creditScore;
    postValues.employment = employment;
    postValues.incomeDetails = incomeDetails;
    postValues.hourly = hourly;
    // postValues.hoursPerWeek = hoursPerWeek;
    postValues.employer = employer;
    postValues.emailConsent = emailConsent;
    postValues.privacyConsent = privacyConsent;
    
    

    console.log(condition);
    console.log(vehicleType);
    console.log(budget);
    console.log(trade);
    console.log(creditScore);
    console.log(employment);
    console.log(incomeDetails);
    console.log(hourly);
    console.log(employer);

    // reset();
    page = 1;
    

    // document.querySelector('.congratPopUp').style = "display:flex;opacity:0;transition:0.5s;"
    // setTimeout(function(){
    //     document.querySelector('.congratPopUp').style = "display:none;"
    //     document.querySelector('.landingSection').style = "display:flex;opacity:0;transition:0.5s;"
    //     setTimeout(function(){
    //         // document.querySelector('.landingSection').style = "display:flex;opacity:1;transition:0.5s;"
    //         // location.reload();
    //     },500)
    // },500)
}

function selectNew(){
    document.querySelector("#condition").value = "New";
    document.querySelector('.landingSection').style = "display:flex;opacity:0;transition:0.5s;"
    setTimeout(function(){
        document.querySelector('.landingSection').style = "display:none;" 
        document.querySelector('#page0').style = "display:flex;opacity:0;"
        setTimeout(function(){
            document.querySelector('#page0').style = "display:flex;opacity:1; transition:0.5s;" 
        },500)
    },500)
    
}

function selectUsed(){
    document.querySelector("#condition").value = "Used";
    document.querySelector('.landingSection').style = "display:flex;opacity:0;transition:0.5s;"
    setTimeout(function(){
        document.querySelector('.landingSection').style = "display:none;" 
        document.querySelector('#page0').style = "display:flex;opacity:0;"
        setTimeout(function(){
            document.querySelector('#page0').style = "display:flex;opacity:1; transition:0.5s;" 
        },500)
    },500)
}


var privacy=0;
function privacyConsent(){
    if(privacy==0){
        document.querySelector("#privacyConsent").checked = true;
        privacy++;
    }else{
        document.querySelector("#privacyConsent").checked = false;
        privacy--;
    }
    activateBtn();
}


// function privacyConsent(){
//     if(document.querySelector("#privacyConsent").checked == true){
//         activateBtn();
//     }
    
// }

var email=0;
function emailConsent(){
    if(email==0){
        document.querySelector("#emailConsent").checked = true;
        email++;
    }else{
        document.querySelector("#emailConsent").checked = false;
        email--;
    }
    activateBtn();
}


// function emailConsent(){
//     if(document.querySelector("#emailConsent").checked == true){
//         activateBtn();
    
// }

function activateBtn(){
    if(email == 1 && privacy ==1){
        document.querySelector("#consentBtn").disabled = false;
    }else{
        document.querySelector("#consentBtn").disabled = true;
    }
}

// function activateBtn(){

//         document.querySelector("#consentBtn").disabled = false;

// }

function employerActivate(){
    if(document.querySelector("#employer").value == ""){
        document.querySelector("#employerBtn").disabled = true;
    }else{
        document.querySelector("#employerBtn").disabled = false;
    }
}

function hourActivate(){
    if(document.querySelector("#hourly").value == ""){
        document.querySelector("#hoursBtn").disabled = true;
    }else{
        document.querySelector("#hoursBtn").disabled = false;
    }
    console.log('change');
}

const radioPhone = document.querySelector('#radioPhone');
const radioEmail = document.querySelector('#radioEmail');
function activateBasicInfo(){
    if(document.querySelector("#fname").value == "" || document.querySelector("#lname").value == ""|| document.querySelector("#email").value == ""|| document.querySelector("#number").value == ""){
        document.querySelector("#basicInfoBtn").disabled = true;
    }else{
        //  if(document.querySelector("#radioPhone").checked = true || document.querySelector("#radioEmail").checked = true){
        //      document.querySelector("#basicInfoBtn").disabled = false;
        // }else{}
        
         if(radioPhone.checked == true || radioEmail.checked == true){
             document.querySelector("#basicInfoBtn").disabled = false;
        }else{}
    }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}