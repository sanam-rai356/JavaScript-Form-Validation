const submitBTN = document.getElementById("submitBTN");
const nameErr = document.getElementById("nameErr");
const EmailErr = document.getElementById("EmailErr");
const passErr = document.getElementById("passErr");
const form_divInput = document.querySelectorAll(".form_div input");
const form_divI = document.querySelectorAll(".form_div i");


submitBTN.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert('Form Submitted Successfully');
        form_divInput.forEach((input)=>{
            input.value="";
        })
        form_divI.forEach((I)=>{
            I.style.display="none";
        })
    }
})

function validateName(){
    let name = document.getElementById("name").value;

    if(name.length==0){
        nameErr.innerHTML="Name is required";
        nameErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML="Fullname is required";
        nameErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    nameErr.innerHTML="";
    nameErr.previousElementSibling.classList.add('fa-check');
    return true;
}


function validateEmail(){
    let emailname = document.getElementById("email").value;

    if(emailname.length==0){
        EmailErr.innerHTML="Email is required";
        EmailErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!emailname.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmailErr.innerHTML="Enter a valid email";
        EmailErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    EmailErr.innerHTML="";
    EmailErr.previousElementSibling.classList.add('fa-check');
    return true;
}



function validatePassword(){
    let passwordName = document.getElementById("password").value;

    if(passwordName.length==0){
        passErr.innerHTML="Password is required";
        passErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!passwordName.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passErr.innerHTML="Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Alphabet";
        passErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    passErr.innerHTML="";
    passErr.previousElementSibling.classList.add('fa-check');
    return true;
}