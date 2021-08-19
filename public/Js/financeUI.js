
        function viewPrivacyNotice(){
            document.querySelector(".privacyNotice").style = "display:flex;";
        }

        function goReview(){

                document.querySelector(".basicInfo").style = "display:flex;opacity:0; transition:0.5s;";
                setTimeout(function(){ 
                    document.querySelector(".basicInfo").style = "display:none;";
                    document.querySelector(".reviewInfo").style = "display:flex; opacity:0;";
                    setTimeout(function(){ 
                        document.querySelector(".reviewInfo").style = "display:flex; opacity:1; transition:0.5s;";
                    }, 500);
                }, 500);


                document.querySelector(".firstnameInfo span").innerHTML = document.querySelector("#fname").value;
                document.querySelector(".lastnameInfo span").innerHTML = document.querySelector("#lname").value;
                document.querySelector(".emailInfo span").innerHTML = document.querySelector("#email").value;
                document.querySelector(".contactInfo span").innerHTML = document.querySelector("#phone").value;
                document.querySelector(".interestInfo span").innerHTML = document.querySelector("#vehicleType").value;
                document.querySelector(".creditInfo span").innerHTML = document.querySelector("#credit").value;
                document.querySelector(".work span").innerHTML = document.querySelector("#work").value;
                document.querySelector(".propertyInfo span").innerHTML = document.querySelector("#property").value;
                document.querySelector(".monthlyInfo span").innerHTML = document.querySelector("#monthly").value;
                
            }
        