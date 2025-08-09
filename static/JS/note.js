let container = document.getElementById('main'); 

function Add_note(){
    let note = document.createElement('div'); 
    note.classList.add('note'); 
    note.innerHTML = `
        <div class="tool">
                <i class="fas fa-save"></i> 
                <i class="fas fa-trash trash"></i> 
            </div>
            <textarea></textarea>
    `; 
    container.appendChild(note); 
    let delet = note.querySelector('.trash'); 
    delet.addEventListener('click', function(){
            note.remove();
        })
        
}
