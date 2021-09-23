var toggleDisplay="off";

const vehicleDisplay = () => {
    if(toggleDisplay=="off"){
        toggleDisplay="on";
        smallView();
        document.querySelector('#displayStyle').setAttribute('href', 'styles/shopList.css');
        document.querySelector('#gridDisplayBtn').className = "fas fa-images fa-2x";
    }else{
        toggleDisplay="off";
        bigView();
        document.querySelector('#displayStyle').setAttribute('href', 'styles/shop.css');
        document.querySelector('#gridDisplayBtn').className = "fas fa-th-list fa-2x";
    }
};


function myFunction(mq) {
    if (mq.matches) { // If media query matches
        document.querySelector('#displayStyle').setAttribute('href', 'styles/shop.css');
        document.querySelector('#gridDisplayBtn').className = "fas fa-th-list fa-2x";
    } else {
        document.querySelector('#displayStyle').setAttribute('href', 'styles/shopList.css');
        document.querySelector('#gridDisplayBtn').className = "fas fa-images fa-2x";
    }
  }
  
  var mq = window.matchMedia("(max-width: 700px)")
  myFunction(mq) // Call listener function at run time
  mq.addListener(myFunction) // Attach listener function on state changes
  
  