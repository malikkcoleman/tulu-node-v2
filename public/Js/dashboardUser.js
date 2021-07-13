//


function ShowAddUserOption() {
	document.querySelector(".userOptionContainer").style = "display:flex;";
}

function ShowAddNewUser() {
	document.querySelector(".addNewUser").style = "display:flex;";
}

function ShowSearchUser() {
	document.querySelector(".userOptionContainer").style = "display:none;";
	document.querySelector(".searchUser").style = "display:flex;";
}

function HideSearchUser() {
	document.querySelector(".searchUser").style = "display:none;";
}

function HideAddNewUser() {
	document.querySelector(".addNewUser").style = "display:none;";
}

function HideEditUser() {
	document.querySelector(".editUser").style = "display:none;";
}
