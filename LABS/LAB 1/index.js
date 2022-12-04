//Validate Name
const element = document.getElementById("full-name");
element.addEventListener("keypress", function (e) {
   preventnum(e);
});

function preventnum(e) {
    if (!isNaN(e.key)) {
        e.preventDefault();
    }
  }

//validating the name
function nameValidation(){
    var fullName = document.getElementById("full-name").value;
    var paragraph = document.getElementById("name-message");
    var pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var message = "";
    if(pattern.test(fullName))
        message= "<span style='color: green;'>Valid Name</span>";
    else
        message = "<span style='color: red;'>Invalid Name</span>";
    paragraph.innerHTML = message;
}

//validating the phone number
function phoneValidation(){
    var regName =  /^[0-9]{10}$/;
    var phone = document.getElementById('phone').value;
    var error = document.getElementById("phone-message");
    if (!regName.test(phone) && phone!=''){
        error.textContent = "Please enter a valid phone number(10 digits)";
        error.style.color = "red";
        document.getElementById("phone").focus();
    }
    
    else 
    {
        error.textContent = ""
    }
}

//validating the email
function emailValidation(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var name = document.getElementById('email').value;
    var error = document.getElementById("email-message");
    if (!mailformat.test(name) && name!='')
    {
        error.textContent = "Please enter a valid email ID";
        error.style.color = "red";
        document.getElementById("email").focus();
    }
    
    else 
    {
        error.textContent = ""
    }
}

function passwordValidation(){
    var regexpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
    var password = document.getElementById('password').value;
    //var password1=document.getElementById('cpass').value;
    var error = document.getElementById("password-message");
    if (!regexpassword.test(password) && password!=''){
        error.textContent = "Please enter a strong password";
        error.style.color = "red";
        document.getElementById("password").focus();
    }
    else{
        error.textContent = ""
    }
}