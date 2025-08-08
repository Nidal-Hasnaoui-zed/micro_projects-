
let task = document.getElementById('input-box'); 
let container = document.getElementById('list-container');

function addTask(){
    if(task.value.trim() === ''){
        alert('plz enter a task !')
    }else {
        let li = document.createElement('li'); 
        li.textContent = task.value ; 
        container.appendChild(li); 

        let span = document.createElement('span'); 
        span.innerHTML = '\u00d7' ;
        li.appendChild(span); 
        
        task.value = ''; 
    }
}
 container.addEventListener('click' , function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked'); 
        }else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
        }
    })