const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.log-btn');
const email = "radhikamadaan1234@gmail.com";
const password = "radhika123";
const username = document.getElementById('username');
const user_pass = document.getElementById('password');
function checkCredentials(event){
    event.preventDefault();
    if((user_pass.value.trim() === password) && (username.value.trim()===email)){
        alert("Login Successfull");
        window.location.href = '/Frontend/components/UserProfile.html';
    }
    else if((user_pass.value.trim() === password) && !(username.value.trim()===email)){
        alert("Username Incorrect");
    }
    else if( (username.value.trim()===password) && !(user_pass.value.trim() === email)){
        alert("Password Incorrect");
    }
    else{
        alert("User Not Found");
    }
}
if(!localStorage.getItem("active")){
localStorage.setItem("active","login");
}
let activeRegion = localStorage.getItem("active");
window.onload = function (){
    if(activeRegion==="register"){
        container.classList.add('active');
    }
    else if(activeRegion==="login"){
        container.classList.remove('active');
    }
}

registerBtn.addEventListener("click", () => {
    container.classList.add('active');
    activeRegion = "register";
    localStorage.setItem("active",activeRegion);
});

loginBtn.addEventListener("click", () => {
    container.classList.remove('active');
    activeRegion = "login";
    localStorage.setItem("active",activeRegion);
});

