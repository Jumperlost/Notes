function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  const notes = getNotes();
  const listNote = document.getElementById("listNote");
  listNote.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    const noteText = document.createElement("span");
    noteText.textContent = note;
    noteText.addEventListener("click", () => editText(noteText, index));
    li.appendChild(noteText);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteNote(index));
    li.appendChild(deleteBtn);
    listNote.appendChild(li);
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const notes = getNotes();
    notes.push(noteText);
    saveNotes(notes);
    displayNotes();
    noteInput.value = "";
  }
}

function editText(noteText, index) {
  const newText = prompt("New text", noteText.textContent);
  if (newText !== null) {
    const notes = getNotes();
    notes[index] = newText.trim();
    saveNotes(notes);
    displayNotes();
  }
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

displayNotes();
