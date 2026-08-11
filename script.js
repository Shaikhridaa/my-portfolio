const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("nav ul");
const icon=document.querySelector("#menu-btn i");
menuBtn.addEventListener("click", function(){
    menu.classList.toggle("menu");
        if(icon.classList.contains("fa-bars")){
            icon.classList.replace("fa-bars", "fa-xmark");
        }
        else{
            icon.classList.replace("fa-xmark", "fa-bars");

        }
    });

const backToTop = document.querySelector("#backToTop");
window.addEventListener("scroll", function(){
    if(window.scrollY>300){
        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";
    }
    else{
        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";
    }
});

backToTop.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const form = document.querySelector("#contact-form");

const nameIp = document.querySelector("[name='name']");
const emailIp = document.querySelector("[name='email']");
const subIp = document.querySelector("[name='subject']");
const msgIp = document.querySelector("[name='msg']");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subError = document.querySelector("#subject-error");
const msgError = document.querySelector("#message-error");

const sendBtn = document.querySelector("#send-btn");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let isValid = true;
    if(nameIp.value.trim() == ""){
        nameError.innerText = "Please enter your name";
        isValid = false;
    }
    else if(nameIp.value.trim().length < 2){
        nameError.innerText = "Name must contain at least 2 letters";
        isValid = false;
    }
    else{
        nameError.innerText = "";
    } 

    if(emailIp.value.trim() == ""){
        emailError.innerText = "Please enter your email";
        isValid = false;
    } 
    else if(!emailIp.checkValidity()){
        emailError.innerText = "Please enter your correct email";
        isValid = false;
    }
    else{
        emailError.innerText = "";
    }

    if(subIp.value.trim() == ""){
        subError.innerText = "Please enter the Subject";
        isValid = false;
    }
    else if(subIp.value.trim().length < 3){
        subError.innerText = "Subject is too short";
        isValid = false;
    }
    else{
        subError.innerText = "";
    }

    if(msgIp.value.trim() == ""){
        msgError.innerText = "Please enter your Message";
        isValid = false;
    }
    else if(msgIp.value.trim().length < 10){
        msgError.innerText = "Message should be at least 10 characters";
        isValid = false;
    }
    else{
        msgError.innerText = "";
    }

    if(isValid){
        sendBtn.innerText = "Sending...";
        sendBtn.disabled = true;
        form.submit();
    }
});