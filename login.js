document.getElementById("login_form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var user = localStorage.getItem(email);
    if (user) {
        var parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            localStorage.setItem( "user", JSON.stringify(parsedUser));
            window.location.href = "page.html";
        } else {
            alert("Incorrect Password");
    
            return false;
        }

    }
    else{
        alert("User Not found");
        return false;
    }
   

});
