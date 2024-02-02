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
    li.textContent = note;
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

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

displayNotes();
