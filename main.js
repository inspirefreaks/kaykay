const form = document.querySelector('#signup'),
    username = document.querySelector('#username'),
    password = document.querySelector('#password'),
    errorMsg = document.querySelector(".error");
    
    



form.addEventListener("submit", (e) => {
    
    validateForm();

    if(isValidForm() == false){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isValidForm(){
    const inputContainer = form.querySelectorAll('.ingrp');
    let result = false;
    inputContainer.forEach((container) =>{
        if (container.classList.contains('errorgrp')){
            result = true;
        }
    });
    return result;
}



function validateForm(){
    // USERNAME
    if (username.value.trim()==""){
        seterror(username, "Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 numbers");
    }else if (username.value.trim().length < 8 || username.value.trim().length > 8 && !isEmailvalid(username.value)){
        seterror(username, "Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 numbers");
    }else{
        setvalid(username);
    };

    // PASSWORD
    if (password.value.trim()==""){
        seterror(password, "Enter your current Password");
    }else if (password.value.trim().length < 9 || password.value.trim().length > 9 ){
        seterror(password, "Enter your current password");
    }else{
        setvalid(password);
    }

   
}


function seterror(element, errormessage){
    const parent = element.parentElement;
    parent.classList.add('errorgrp');
    const paragraph = parent.querySelector(".error");
    const icon = parent.querySelector(".imgicon");
    paragraph.innerHTML = errormessage;
    icon.style.display ="inline";

    element.style.border ="2px solid red";
}

function setvalid(element){
    const parent = element.parentElement;
    if (parent.classList.contains('errorgrp')){
        parent.classList.remove('errorgrp');
    }
    const paragraph = parent.querySelector(".error");
    const icon = parent.querySelector(".imgicon");
    paragraph.innerHTML = " ";
    element.style.border ="2px solid black";
    icon.style.display = "none";


}

function isEmailvalid(email){
    const reg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(email);
}








