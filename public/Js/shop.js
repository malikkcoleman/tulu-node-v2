
var start = 0;
var limit = 15;
function initialLoad(type){
  $.ajax({
      url: "/inventory/"+type+"/" + start + "/" + limit,
      method: "GET",
      success: function(res){
        if(res.vehicles.length < 15){
          removeNextButton();
        }
        renderPosts(res);
      }
    });
}

function getNext(type){
  start = start + limit;
  $.ajax({
    url: "/inventory/"+type+"/" + start + "/" + limit,
    method: "GET",
    success: function(res){
      if(res.vehicles.length < 15){
        removeNextButton();
      }
      renderPosts(res);
    }
  });
}

function filter(formData){
  start = 0;
  limit = 15;
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

function removeNextButton(){
  $("#nextButtonHolder").empty();
  $("#nextButtonHolder").append("<p>END OF RESULTS</p>")
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





function carView(index){
    location.replace("/carview"+ "?id=" + index);
}

function selectedFilter(){
  var filterval = Object.fromEntries(new URLSearchParams(location.search))
  $('#MakeSearch').val(filterval.make)
  $('#VehicleTypeSearch').val(filterval.vehicleType)
  if(filterval.VehicleSort == undefined){
      $('#VehicleSort').val("")
  }else{
      $('#VehicleSort').val(filterval.VehicleSort)
  }

  
  $('#makeSelect').val(filterval.make)
  $('#vehicleType').val(filterval.type)
  ////////////////////////////////////
  $('#MakeSearchMobile').val(filterval.make)
  $('#VehicleTypeSearchMobile').val(filterval.vehicleType)
  if(filterval.VehicleSort == undefined){
      $('#VehicleSortMobile').val("")
  }else{
      $('#VehicleSortMobile').val(filterval.VehicleSort)
  }

  
  $('#makeSelectMobile').val(filterval.make)
  $('#vehicleTypeMobile').val(filterval.type)
}
selectedFilter()

function SearchVehicles(){
  var filterval = Object.fromEntries(new URLSearchParams(location.search))
  $('#modelSelect').empty();
  $('#yearSelect').empty();
  $.ajax({
    url: "/inventory/getModels?make=" + $('#makeSelect').val() + "&type="+ $('#VehicleTypeSearch').val(),
    method: "GET",
    success: function(res){
      console.log(res)
      var html = "";
      var yearHtml = "";
      
      if(res['models'] == undefined){
        html += '<option value="">Any</option>'
      }else{
        res['models'].forEach(function(data){
          html += '<option value="'+data+'">'+data+'</option>'
        })
      }

      res['years'].forEach(function(data){
        yearHtml += '<option value="'+data+'">'+data+'</option>'
      })

      $('#modelSelect').append('<option value="">Any</option>')
      $('#modelSelect').append(html)
      $('#modelSelect').val(filterval.model)
      $('#yearSelect').append('<option value="">Any</option>')
      $('#yearSelect').append(yearHtml)
      $('#yearSelect').val(filterval.year)
      if($('#modelSelect option').length == 1){
        $('#modelSelect').prop( "disabled", true );
      }else{
        $('#modelSelect').prop( "disabled", false );
      }
      
    }
  });
}

function SearchVehiclesMobile(){
  var filterval = Object.fromEntries(new URLSearchParams(location.search))
  $('#modelSelectMobile').empty();
  $('#yearSelectMobile').empty();
  $.ajax({
    url: "/inventory/getModels?make=" + $('#makeSelectMobile').val() + "&type="+ $('#VehicleTypeSearchMobile').val(),
    method: "GET",
    success: function(res){
      var html = "";
      var yearHtml = "";

      if(res['models'] == undefined){
        html += '<option value="">Any</option>'
      }else{
        res['models'].forEach(function(data){
          html += '<option value="'+data+'">'+data+'</option>'
        })
      }

      res['years'].forEach(function(data){
        yearHtml += '<option value="'+data+'">'+data+'</option>'
      })

      $('#modelSelectMobile').append('<option value="">Any</option>')
      $('#modelSelectMobile').append(html)
      $('#modelSelectMobile').val(filterval.model)
      $('#yearSelectMobile').append('<option value="">Any</option>')
      $('#yearSelectMobile').append(yearHtml)
      $('#yearSelectMobile').val(filterval.year)
      if($('#modelSelectMobile option').length == 1){
        $('#modelSelectMobile').prop( "disabled", true );
      }else{
        $('#modelSelectMobile').prop( "disabled", false );
      }
      
    }
  });
}

SearchVehicles();
SearchVehiclesMobile();
