const login_btn = document.getElementById('login-btn');
const content = document.getElementById('content');
login_btn.addEventListener("click",()=>{
    content.style.display = content.style.display==='block' ? 'none' : 'block';
});
window.addEventListener('click',(e)=>{
    if(!login_btn.contains(e.target) && !content.contains(e.target)){
        content.style.display = 'none';
    }
});

