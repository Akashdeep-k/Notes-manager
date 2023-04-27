// const fs = require("fs")
// const dataBuffer = fs.readFileSync("./notes.json")
// const dataJSON = dataBuffer.toString()
// const dataParsedJSON = JSON.parse(dataJSON)
// const dataParsedBUffer = JSON.parse(dataBuffer)
// const dataStringify = JSON.stringify(dataParsedJSON)

// console.log(dataJSON)
// console.log(typeof dataJSON)
// console.log(dataJSON.length)
// console.log(typeof dataParsedBUffer)
// console.log(typeof dataParsedJSON)
// console.log(typeof dataStringify)

const yargs = require("yargs")
const {addNote, removeNote, listNotes, readNote} = require("./utils")

yargs.command({
    command: "add",
    describe: "adding a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "removing a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list all notes",
    handler(){
        listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "reading a note",
    builder: {
        title: {
            describe: "title of note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)