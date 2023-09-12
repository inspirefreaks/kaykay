const form = document.querySelector('#codeup'),
    errorMsg = document.querySelector(".error"),
    Code = document.querySelector("#code");



form.addEventListener("submit", (e) => {
    
    validateForm();

    if(isValidForm() == true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isValidForm(){
    const inputContainer = form.querySelectorAll('.ingrp');
    let result = true;
    inputContainer.forEach((container) =>{
        if (container.classList.contains('errorgrp')){
            result = false;
        }
    });
    return result;
}



function validateForm(){
    // CODE

    if(Code.value.trim()==""){
        seterror(Code, "Enter the 6-digit code sent to your number");
    }else if (Code.value.trim().length < 6 || code.value.trim().length > 6 || !isCodevalid(Code.value) ){
        seterror(Code, "Enter the 6-digit code sent to your number");
    }else{
        setvalid(Code);
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
    const icon = parent.querySelector(".imgicon");
    const paragraph = parent.querySelector(".error");
    paragraph.innerHTML = " ";
    icon.style.display ="noone";
    element.style.border ="2px solid black";


}

function isCodevalid(num){
    const reeg = "/[0-9]/";
    return reeg.test(num);
}






