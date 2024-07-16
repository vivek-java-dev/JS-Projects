const createBtn = document.getElementById('create-btn')
const newNoteForm = document.getElementById('new-note-form')
const titleBox = document.getElementById('title-box')
const addBtn = document.getElementById('add-btn')
const noteContent = document.getElementById('note-content')
const noteTextarea = document.getElementById('note-textarea')
const notesList = document.getElementById('notes-list');



createBtn.addEventListener('click', () => {
    newNoteForm.style.display = 'flex'
    notesList.style.display = 'none'
})
addBtn.addEventListener('click',() => {

    if (addBtn.innerHTML == 'Add') {

        createBtn.style.display = 'none'
        noteContent.style.display = 'block'
        addBtn.innerHTML = 'Save'

    }else if(addBtn.innerHTML == 'Save'){
        saveNote();
    }
})



function saveNote(){
    const title = titleBox.value
    const content = noteTextarea.value

    if(title.trim() === '' || content.trim() === ''){
        alert('Both title and content are required')
        console.log('hui');

        return;
    }

    console.log('kuku');
    const note = {
        title: title,
        content: content,
        id: new Date().getTime()

    }

    addNoteToList(note);
    
    titleBox.value = ''
    noteTextarea.value = ''
    addBtn.innerHTML = 'Add'

    newNoteForm.style.display = 'none'
    noteContent.style.display = 'none'
    notesList.style.display = 'flex'
    createBtn.style.display = 'initial'

}

function addNoteToList(note) {
    
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.dataset.id = note.id;

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = note.title;

    const noteContent = document.createElement('p');
    noteContent.textContent = note.content;
    noteContent.style.fontSize = '22px'

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);

    notesList.appendChild(noteDiv);
}
