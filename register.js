window.onload=pageLoad;
function pageLoad(){
	var Form = document.getElementById("Form");
	Form.onsubmit= validate;
}
function validate(){
	var check = true;
	var Fname = document.getElementById("Fname").value;
	var Lname = document.getElementById("Lname").value;
	var mail = document.getElementById("email").value;
	var phone = document.getElementById("telephone").value;
	var password = document.getElementById("password").value;

	
	if(Fname == ""){
		alert('First-Name is required !');
		check= false;
	}
	if(Lname == ""){
		alert('Last-Name is required !');
		check= false;
	}

	if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}

	if(password == ""){
		alert('Password is required !');
		check= false;
	}
	
	if (phone == "") {
		alert('Phone is required !');
	}
	
	if (!Fname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		check= false;
	}
	if (!Lname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		check= false;
	}
	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}

	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
	
	
	if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
	if(check==true){
		alert('thanks '+Fname+" "+Lname+' for join to us');
		window.location.href='index.html';
	}
	return check;
}
