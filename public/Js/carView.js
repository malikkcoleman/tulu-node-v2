
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


var html="";
html+='<h3 class="userName" id="dealershipName" onclick="viewDealer(`'+dealers[0].uuid+'`)">';
html+=    dealers[0].name;
html+='</h3>';
html+='<p>'+dealers[0].website+'</p>';
html+='<p>'+address[0].street+" "+address[0].city+", "+address[0].province+'</p>';
html+='<p>'+dealers[0].amvic+'</p>';
html+='<p></p>';
$('.userInfo').prepend(html)

function viewDealer(dealerId){
    location.replace("/DealerListing/"+dealerId);
}


function buyNow(){
    location.replace("/BuyNow/"+vin);
}

function bookAppointment(){
    location.replace("/appointment/booking/"+vin);
}