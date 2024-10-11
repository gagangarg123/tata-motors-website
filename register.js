document.getElementById("register-form").addEventListener("submit",function(event){
    event.preventDefault();
    var name=document.getElementById("full_name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirm_pass=document.getElementById("confirm-pass").value;


    var error_msg=document.getElementById("register_error");

    error_msg.innerText = '';

    if(password!==confirm_pass){
        error_msg.innerText = "Passwords do not match.";
        return false;
    }

    if(password.length<8) {
        error_msg.innerText = "Password must be at least 8 characters long";
        return false;
    }

    if(localStorage.getItem(email)) {
        alert("Email already registered");
        
        window.location.href="login.html"
        return false;
    }

    const user={
        name:name,
        email:email,
        password:password,

    };

    localStorage.setItem(email,JSON.stringify(user));
    alert("Registration success");
    window.location.href="login.html"



});