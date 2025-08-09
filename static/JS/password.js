let password = document.getElementById('password'); 
let strength = document.getElementById('strength');
let message = document.getElementById('message'); 
let button = document.getElementById('button'); 

password.addEventListener('input', function(){
    let password_value = password.value ;
    let password_len = password_value.length; 
    
    let pwd_pawer = ''; 
    if(password_len === 0){
        pwd_pawer = ''; 
    }else if(password_len < 5){
        pwd_pawer = 'Weak Password !'; 
    }else if(password_len < 10){
        pwd_pawer = 'Mid Password !'; 
    }else {
        pwd_pawer = 'Strong Password !';
    }
    strength.textContent = pwd_pawer ; 
    message.style.display = 'block';
})
button.addEventListener('click', function(){
    let pwd_type = password.getAttribute('type'); 
    if(pwd_type === 'password'){
        password.setAttribute('type', 'text'); 
    }else{
        password.setAttribute('type', 'password');
    }
})