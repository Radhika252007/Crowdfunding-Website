const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.log-btn');
registerBtn.addEventListener("click", () => {
    container.classList.add('active');
});

loginBtn.addEventListener("click", () => {
    container.classList.remove('active');
});