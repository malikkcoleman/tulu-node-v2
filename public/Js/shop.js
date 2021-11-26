
var start = 0;
var limit = 10;
$.ajax({
    url: "/inventory/shop/" + start + "/" + limit,
    method: "GET",
    success: function(res){
      renderPosts(res);
      console.log('teoptspoeitsepo')
    }
  });
function getNext(){
  // start = start + limit;
  // $.ajax({
  //   url: "/inventory/shop/" + start + "/" + limit,
  //   method: "GET",
  //   success: function(res){
  //     renderPosts(res);
  //   }
  // });
}

function filter(formData){
  start = 0;
  limit = 10;
  $("#Vehicles").empty();
  var formDataObject = Object.fromEntries(new FormData(formData))
  let iterations = Object.keys(formDataObject).length
  var link = ''
  for (const [key, value] of Object.entries(formDataObject)) {
    if (!--iterations){
      link += `${key}=${value}`
    }else{
      link += `${key}=${value}&`
    }
  }
  $.ajax({
    url: "/inventory/filter?"+link,
    method: "GET",
    success: function(res){
      renderPosts(res);
    }
  });

  return false;
}


// function getPrevious(){
//   start = start - limit;
//   $.ajax({
//     url: "/get-post/" + start + "/" + limit,
//     method: "GET",
//     success: function(response){
//       renderPosts(response);
//     }
//   });
// }

var view
function renderPosts(resss){
  if (resss.vehicles.length > 0){
      console.log(resss)
    var html = "";


    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      console.log(arr);
      }
  
      let arr = Array.prototype.slice.call(resss.vehicles);


      arr.forEach(function(data){
        if(view == 'small'){
            html+='<li class="vehicleListItemsSmallView" id="vehicleHolder">';
            var text = '';
            html+='<div class="imgContainer">';
            html+='    <img src="/image/'+ data.vin +'" class="carImage" alt="car-image"/>';
            html+='</div>';
            html+='    <div class="carDetails">';
            html+='        <h2 class="carName">' + data.year + ' ' + data.make + ' ' + data.model + '</h2>';
            html+='        <p class="carPrice">$' + data.maxPrice + '</p>';
            if(data.mileage != null){
                html += '       <p class="carMileage">'+data.mileage +'  Kms</p>';
            }
            html+='        <a href="/carview/'+ data.vin +'"><button class="moreInfo">View Vehicle</button></a>';
            html += '       <p class="dealership">' + data.dealer.name + '</p>';
            html+='    </div>';
            html+='</li>';
        }else{
            html += '<li class="vehicleListItems" id="vehicleHolder">';
            var text = '';
            html+='<div class="imgContainer">';
            html+='    <img src="/image/'+ data.vin +'" class="carImage" alt="car-image"/>';
            html+='</div>';
            html += '   <div class="carDetails">';
            html += '       <h2 class="carName">' + data.year + ' ' + data.make + ' ' + data.model + '</h2>';
            html += '       <p class="carPrice">$'+data.maxPrice + '</p>';
            if(data.mileage != null){
                html += '       <p class="carMileage">'+data.mileage +'  Kms</p>';
            }
            html += '       <div class="additionalCarInfo" id="vehicle' + i + '">';
            html += '           <p class="carTrim">' + data.trim + '</p>';
            html += '           <p class="carTransmission">' + data.transmissionName + '</p>';
            html += '       </div>';
            html += '       <div class="moreInfoContainer">';
            html += '              <a href="/carview/'+ data.vin +'"><button class="moreInfo">View Vehicle</button></a>';
            html += '       </div>';
            html += '       <p class="dealership">' + data.dealer.name + '</p>';
            html += '       <p class="views"><i class="far fa-eye"></i> '+data.views+' views<p>';
            html += '   </div>';
            html += '</li>';
        }
        
    })
    $("#loading").remove()
    $("#Vehicles").append(html)
  }
}

function smallView(){
    view = 'small'
    getNext()
}

function bigView(){
    view = 'big'
    getNext()
}

$(window).scroll(function(){
  if($(window).scrollTop() >= $(document).height() - $(window).height() - 
  30
  ){
    getNext();
  }
})



function carView(index){
    location.replace("/carview"+ "?id=" + index);
}

function SearchVehicles(){
    gVehicle = [];
    for(var x=0;x!=arr.length;x++){
        if($('#MakeSearch').val()!=""){
            if(arr[x].make == $('#MakeSearch').val()){
                if($('#VehicleTypeSearch').val()!= ""){
                    if(arr[x].vehicleType == $('#VehicleTypeSearch').val()){
                        gVehicle.push(arr[x]);
                    }
                }else{
                    gVehicle.push(arr[x]);
                }
            }
        }else{
            
            if($('#VehicleTypeSearch').val()!= ""){
                if(arr[x].vehicleType == $('#VehicleTypeSearch').val()){
                    gVehicle.push(arr[x]);
                }
            }else{
                gVehicle.push(arr[x]);
            }
        }
    }

    
    $('.filterBreadCrumbs span').empty()
    if($('#MakeSearch').val()!=""){
        $('.filterBreadCrumbs span').append($('#MakeSearch').val().toUpperCase()+" ")
    }

    if($('#VehicleType').val()!=""){
        $('.filterBreadCrumbs span').append($('#VehicleTypeSearch').val().toUpperCase()+" ")
    }
    
    console.log(gVehicle)
    populateVehicle(gVehicle);
}
