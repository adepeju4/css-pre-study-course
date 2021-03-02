let modal = document.getElementById("myModal");
let btn = document.getElementById("addNote");
let span = document.getElementsByClassName("close")[0];
let list = [];
let noteNumber = document.querySelector("#noteNumber");
let numberOfNotes;


btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// A function to create a note's HTML
function createNote(date = "13 / 05 / 23", title = "Spatulas", content = 'Yesterday I went to the store and got some much - needed < a href="https://www.youtube.com/watch?v=2XbCWmY0eqY" > spatulas! < /a> (What better way to say I love myself than to buy myself a spatula?)', image = "images/spatula.gif") {
    let article = `<article id="sannisJournal">
                <h2>${date}: ${title}</h2>
                <p>
                    <img src="${image}" alt="image" id="user-image">
                </p>
                <p>${content}</p> 
                </article>`;
    list.push(article);
    return article;
}

// Renders the new note's HTML into the DOM
function renderNote(noteHTML) {
    const notesListContainer = document.querySelector(".js-note-list");

    notesListContainer.innerHTML = noteHTML + notesListContainer.innerHTML;
}

// Get a reference to the form's DOM element
const addNoteForm = document.forms["add-note-form"];

function handleAddNoteSubmit(event) {
    // Prevent browser default behavior by causing page reload
    event.preventDefault();

    // Get the value of various form fields
    const title = addNoteForm.elements.title.value;
    const date = addNoteForm.elements.date.value;
    const note = addNoteForm.elements.note.value;
    const image = "";

    const newNote = createNote(date, title, note, image);

    renderNote(newNote);

    // Close modal after adding new note
    modal.style.display = "none";
    numberOfNotes = list.length + 2;
    noteNumber.innerHTML = numberOfNotes;
}


// Listen for form submission by user
addNoteForm.addEventListener("submit", handleAddNoteSubmit)


//for uploading file using input file
// let loadFile = function(event){
//     let image = document.querySelector
// }