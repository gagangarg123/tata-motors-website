function formcheck() {
    const first_name = document.getElementById('first-name').value;
    const last_name = document.getElementById('last-name').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('mobile').value;
    const postal_code = document.getElementById('prefered-retailer').value;
    const error1 = document.getElementById('error1');
    const postalError = document.getElementById('postal-error'); 

    error1.innerText = '';
    postalError.innerText = ''; 




    if (mail === '' || phone === '' || first_name === '' || last_name === '') {
        error1.innerText = "Please enter all the required fields.";
        error1.scrollIntoView({ behavior: 'smooth',block: 'center', });
        return false;
    }
    if (phone.length < 10 ) {
        error1.innerText = "Enter a Correct Valid Mobile number.";
        error1.scrollIntoView({ behavior: 'smooth' });
        return false; 
    }

    if (postal_code === '') {
        postalError.innerText = "Please enter your prefered postal code.";
        postalError.scrollIntoView({ behavior: 'smooth',block: 'center', });
        return false;
    }
    error1.innerText = ""; 
    postalError.innerText = "";
    return true;
}
