var role = "";
        
function GetUser() {
    //FIXME: I think this needs to be deleted
    $.ajax({
        type: "PUT",
        url: "/Users/Current",
        cache: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (results) {
            console.log(results);
            $('.loggedInAs').append("Logged in as : " + results.firstName + " " + results.lastName);
            roles = results.roles;
            userprivileges(roles);
        },
        error: function (results) {
            alert("Error");
        },
    });
}

function userprivileges(roles){
    console.log(roles);
    var menu="";
    for(var i = 0; i != roles.length;i++){
        if(roles[i].role=="User"){
            menu="";
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/">Home</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/About">About Us</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/Shop">Shop</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle" onclick="accountSubMenu()">';
            menu+='        My Account';
            menu+='        <i class="fas fa-sort-down accountDropMenuBtn"></i>';
            menu+='    </p>';
            menu+='    <ul class="accountSubMenuList">';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/profile">Profile</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/messages">Messages</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/appointment">Appointments</a>';
            menu+='         </li>';
            menu+='    </ul>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/Events">Events</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/TuluList">Tulus</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/DealershipList">Dealerships</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            //menu += '    <a onclick="https://www.tulucanada.com/web/careers">';
            //menu += '    <a onclick="window.location.href= `https://www.tulucanada.com/web/careers`">';
            menu += '    <a onclick="window.open(`https://www.tulucanada.com/web/careers`)">';
            menu+='        <button class="influencerBtn">Become a Tulu</button>';
            menu+='    </a>';
            menu+='</li>';
        }else if(roles[i].role=="Tulu"){
            menu="";
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/">Home</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/About">About Us</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/Shop">Shop</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle" onclick="accountSubMenu()">';
            menu+='        My Account';
            menu+='        <i class="fas fa-sort-down accountDropMenuBtn"></i>';
            menu+='    </p>';
            menu+='    <ul class="accountSubMenuList">';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/Tulu">Profile</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/messages">Messages</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/appointment">Appointments</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/clients">Clients</a>';
            menu+='         </li>';
            menu+='    </ul>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/Events">Events</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/TuluList">Tulus</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/DealershipList">Dealerships</a>';
            menu+='</li>';
        }else if(roles[i].role=="DealerAdmin" || roles[i].role=="DealerUser"){
            menu="";
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/">Home</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/About">About Us</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/Shop">Shop</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/WholesaleMarketplace">Wholesale Marketplace</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle" onclick="accountSubMenu()">';
            menu+='        My Account';
            menu+='        <i class="fas fa-sort-down accountDropMenuBtn"></i>';
            menu+='    </p>';
            menu+='    <ul class="accountSubMenuList">';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/Dashboard">Profile</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/DashboardVehicle">Vehicles</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/DashboardUser">Users</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/messages">Messages</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/appointment">Appointments</a>';
            menu+='         </li>';
            menu+='    </ul>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/Events">Events</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/TuluList">Tulus</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/DealershipList">Dealerships</a>';
            menu+='</li>';
        }else if(roles[i].role=="SysAdmin"){
            menu="";
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/">Home</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/About">About Us</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/Shop">Shop</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle">';
            menu+='        <a href="/Home/WholesaleMarketplace">Wholesale Marketplace</a>';
            menu+='    </p>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <p class="menuDropDownTitle" onclick="accountSubMenu()">';
            menu+='        My Account';
            menu+='        <i class="fas fa-sort-down accountDropMenuBtn"></i>';
            menu+='    </p>';
            menu+='    <ul class="accountSubMenuList">';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/DashboardSysAdmin">Profile</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/DashboardSysAdminVehicle">Add Vehicle</a>';
            menu+='         </li>';
            menu+='         <li class="subMenuListLink">';
            menu+='             <a href="/home/DashboardSysAdminUser">Add User</a>';
            menu+='         </li>';
            menu+='    </ul>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/Events">Events</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/TuluList">Tulus</a>';
            menu+='</li>';
            menu+='<li class="menuItems">';
            menu+='    <a href="/Home/DealershipList">Dealerships</a>';
            menu+='</li>';
        }
    }
    
    $('.menu').empty();
    $('.menu').append(menu);
    
    logoutBtn();
}

function guestprivileges(){
    var menu="";
        menu+='<li class="menuItems">';
        menu+='    <p class="menuDropDownTitle">';
        menu+='        <a href="/">Home</a>';
        menu+='    </p>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <p class="menuDropDownTitle">';
        menu+='        <a href="/Home/About">About Us</a>';
        menu+='    </p>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <p class="menuDropDownTitle">';
        menu+='        <a href="/Home/Shop">Shop</a>';
        menu+='    </p>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <p class="menuDropDownTitle" onclick="accountSubMenu()">';
        menu+='        My Account';
        menu+='        <i class="fas fa-sort-down accountDropMenuBtn"></i>';
        menu+='    </p>';
        menu+='    <ul class="accountSubMenuList">';
        menu+='        <li class="subMenuListLink">';
        menu+='            <a href="/home/dashboard">Sign In</a>    ';
        menu+='        </li>';
        menu+='        <li class="subMenuListLink">';
        menu+='            <a href="https://tulucanadab2c.b2clogin.com/tulucanadab2c.onmicrosoft.com/B2C_1_tulusignupsignin/api/CombinedSigninAndSignup/unified?local=signup&csrf_token=VEpCMVAzL1hEQXdSS3Q2QnRiNnIzL05uRFJZRUprUTRsYUoxeGxEckw4cVRJREpzUUpQbVVwd1dLVmpIWTBiVFNKbWo1TUxoWjN2NDdCSlovQzZhd2c9PTsyMDIxLTAxLTI4VDA0OjQxOjA1Ljc5NjI3NTJaOy9JME9lbkRXbWZxZjlYVTFZQjVNTXc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI5OWUxYThjOS01ODE4LTQ3MWUtODg1NS02MzUyOWJhOTgxNTEifQ&p=B2C_1_tulusignupsignin">Register</a>';
        menu+='        </li>';
        menu+='    </ul>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <a href="/Home/Events">Events</a>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <a href="/Home/TuluList">Tulus</a>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu+='    <a href="/Home/DealershipList">Dealerships</a>';
        menu+='</li>';
        menu+='<li class="menuItems">';
        menu +='    <a onclick="window.open(`https://www.tulucanada.com/web/careers`)">';
        menu+='        <button class="influencerBtn">Become a Tulu</button>';
        menu+='    </a>';
        menu+='</li>';
    $('.menu').empty();
    $('.menu').append(menu);
}

function logoutBtn(){
    var logOutBtn = '';
    logOutBtn+='<li class="subMenuListLink">';
    logOutBtn+='    <a href="/account/signout">Log Out</a>';
    logOutBtn+='</li>';
    $('.accountSubMenuList').append(logOutBtn);
}