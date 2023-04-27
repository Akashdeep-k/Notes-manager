const fs = require("fs")

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        console.log("New note added")
        notes.push({
            'title': title,
            'body': body
        })
        saveNotes(notes)
        debugger
    }
    else {
        console.log("Title already used")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const resultingNotes = notes.filter((note) => note.title !== title)
    if (resultingNotes.length === notes.length) {
        console.log("No match found")
    }
    else {
        console.log("Note deleted")
        saveNotes(resultingNotes)
    }
}

const saveNotes = (notes) => {
    const notesData = JSON.stringify(notes)
    fs.writeFileSync("./notes.json", notesData)
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)
    }
    catch (e) {
        return []
    }
}

const listNotes = () => {
    console.log("Your notes: ")
    const notes = loadNotes()
    notes.forEach(note => {
        console.log("title : " + note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note_needed = notes.find((note) => note.title === title)

    if (note_needed) {
        console.log("The note is : ")
        console.log(note_needed.title)
        console.log(note_needed.body)
    }
    else {
        console.log("No note found")
    }
}
module.exports = { addNote, removeNote, listNotes, readNote }