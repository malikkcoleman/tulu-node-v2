
function verifyTestDrive(){
    const vinNumberTestDrive = document.querySelector('#vinNumberTestDrive').value;
    const dealershipNameTestDrive = document.querySelector('#dealershipNameTestDrive').value;
    const yearTestDrive = document.querySelector('#yearTestDrive').value;
    const makeTestDrive = document.querySelector('#makeTestDrive').value;
    const modelTestDrive = document.querySelector('#modelTestDrive').value;
    const fnameTestDrive = document.querySelector('#fnameTestDrive').value;
    const lnameTestDrive = document.querySelector('#lnameTestDrive').value;
    const phoneNumberTestDrive = document.querySelector('#phoneNumberTestDrive').value;
    const emailTestDrive = document.querySelector('#emailTestDrive').value;
    const dateTestDrive = document.querySelector('#dateTestDrive').value;
    const timeTestDrive = document.querySelector('#timeTestDrive').value;
    const location = document.querySelector('#location').value;
    const street = document.querySelector('#street').value;
    const city = document.querySelector('#city').value;
    const province = document.querySelector('#province').value;
    const postalCode = document.querySelector('#postalCode').value;


    if(location=="home"){
        document.querySelector('.address').style="display:flex;"
        if(vinNumberTestDrive!="" && dealershipNameTestDrive!="" && yearTestDrive!="" && makeTestDrive!="" && modelTestDrive!="" && fnameTestDrive!="" && lnameTestDrive!="" && phoneNumberTestDrive!="" && emailTestDrive!="" && dateTestDrive!="" && timeTestDrive!="" && location!="" && street!="" && city!="" && province!="" && postalCode!=""){   
            document.querySelector('.testDriveNext').disabled = false;
            document.querySelector('.testDriveNext ').style = 'opacity:1';
        }
    }else{
        document.querySelector('.address').style="display:none;"
        if(vinNumberTestDrive!="" && dealershipNameTestDrive!="" && yearTestDrive!="" && makeTestDrive!="" && modelTestDrive!="" && fnameTestDrive!="" && lnameTestDrive!="" && phoneNumberTestDrive!="" && emailTestDrive!="" && dateTestDrive!="" && timeTestDrive!="" && location!=""){   
            document.querySelector('.testDriveNext').disabled = false;
            document.querySelector('.testDriveNext ').style = 'opacity:1';
        }
    }

    
}




var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
console.log(today)
document.getElementById("dateTestDrive").setAttribute("min", today);
