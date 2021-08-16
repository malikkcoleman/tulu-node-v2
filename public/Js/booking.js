
window.onload = function () {
    populateFields();
}

function populateFields(){
    $('#dealerId').val(dealer[0]._id);
    $('#userId').val(user._id);
    $('#vin').val(vehicle[0].vin);
    $('#vehicle').val(vehicle[0].year +" "+vehicle[0].make +" "+vehicle[0].model);
    $('#vehiclePrice').val(vehicle[0].maxPrice);
    $('#customer').val(user.fName+" "+user.lName);
    $('#dealership').val(dealer[0].name);

    $('.vehicleLabel').append("<span>"+vehicle[0].year +" "+vehicle[0].make +" "+vehicle[0].model+"</span>");
    $('.priceLabel').append("<span>"+vehicle[0].maxPrice+"</span>");
    $('.dealershipLabel').append("<span>"+dealer[0].name+"</span>");
    $('.customerLabel').append("<span>"+user.fName+" "+user.lName+"</span>");
    var html="";
    for(var x=0;x!=tulus.length;x++){
            html+='<li onclick="selectTulu('+x+')">';
            html+='    <img src="/image/'+ tulus[x]._id +'" alt="">';
            html+='    <div class="tuluInfo">';
            html+='        <p class="name">'+tulus[x].fName+ ' ' +tulus[x].lName+ '</p>';
            html+='        <p class="email">'+tulus[x].email+'</p>';
            html+='    </div>';
            html+='</li>';
    }
    $('.tuluList').append(html);
}

function selectTulu(index){
    document.querySelector('.tuluPicker').style = "display:none;";
    $('#tuluId').val(tulus[index]._id);
    $('#tulu').val(tulus[index].fName + " " + tulus[index].lName)
    $('.tuluLabel').append("<span>"+tulus[index].fName + " " + tulus[index].lName+"</span>")
}


function showPrivacyTerms(){
    document.querySelector('.privacyTerms').style="display:flex;"
}

function iAgree(){
    document.querySelector('.privacyTerms').style="display:none;"
    document.querySelector('.saveTestDrive').style="opacity:1;";
    document.querySelector('.saveTestDrive').disabled=false;
}

function skip(){
    document.querySelector('.tuluPicker').style = "display:none;";
    $('.tuluLabel').append("<span>Skipped</span>")
}