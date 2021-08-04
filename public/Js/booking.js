
 

    window.onload = function () {

        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");

        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            if (hash[0] === "dealerId") {
                dealerId = hash[1];
            } else if (hash[0] === "vin") {
                vin = hash[1];
            } 
        }
        populateFields();
    }

    function populateFields(){
        $('#dealerId').val(dealerId);
        $('#userId').val(currUserId);
        $('#vin').val(vin);

        var html="";
        for(var x=0;x!=tuluList.length;x++){
            console.log(tuluList[x]);
            if(tuluList[x].role == "tulu"){
                html+='<li onclick="selectTulu('+x+')">';
                html+='    <img src="" alt="">';
                html+='    <div class="tuluInfo">';
                html+='        <p class="name">'+tuluList[x].fName+ ' ' +tuluList[x].lName+ '</p>';
                html+='        <p class="email">'+tuluList[x].email+'</p>';
                html+='    </div>';
                html+='</li>';
            }
        }
        
        $('.tuluList').append(html);

        for(var x=0;x!=vehicleList.length;x++){
            if(vehicleList[x].vin == vin){
                $("#vehicle").val(vehicleList[x].year +" "+vehicleList[x].make+" "+vehicleList[x].model)
                $(".vehicleLabel").append("<span>"+vehicleList[x].year +" "+vehicleList[x].make+" "+vehicleList[x].model+"</span>")
                $("#vehiclePrice").val(vehicleList[x].maxPrice);
                $(".priceLabel").append("<span>"+vehicleList[x].maxPrice+"</span>");
                $("#customer").val(user.fName +" "+ user.lName);
                $(".customerLabel").append("<span>"+user.fName +" "+ user.lName+"</span>");
                vehiclerTargetId = vehicleList[x].targetId;

            }
        }

        for(var x=0;x!=dealerList.length;x++){
            if(dealerList[x].uuid == vehiclerTargetId){
                $("#dealership").val(dealerList[x].name);
                $(".dealershipLabel").append("<span>"+dealerList[x].name+"</span>");
            }
        }

    }

    function selectTulu(id){
        document.querySelector('.tuluPicker').style = "display:none;";
        $('#tuluId').val(tuluList[id]._id);
        $('#tulu').val(tuluList[id].fName + " " + tuluList[id].lName)
        $('.tuluLabel').append("<span>"+tuluList[id].fName + " " + tuluList[id].lName+"</span>")
    }
