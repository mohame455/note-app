const fs = require('fs')
const ReadFile=()=>{
    return  JSON.parse(fs.readFileSync("./note.txt"))
}
const add = (title, body) => {
    try {
        let tab = ReadFile()
        let note = {
            title: title,
            body: body
        }
        tab.push(note);
        fs.writeFileSync('note.txt', JSON.stringify(tab))
    } catch (err) { console.log(err) }
}
const remove = (title) => {
    try {
        let tab = ReadFile();
        fs.writeFileSync("note.txt",JSON.stringify (tab.filter(e => e.title !== title)))
    } catch (err) { console.log(err) }
}

const list = () => {
    try {
        console.log(JSON.parse(fs.readFileSync("note.txt")))
    } catch (err) { console.log(err) }
}

const fetsh = (title) => {
    try {
        let tab = JSON.parse(fs.readFileSync("note.txt"));
        console.log(JSON.stringify(tab.filter(e => e.title === title)))
    } catch (err) { console.log(err) }
}
module.exports={
    add:add,
    remove:remove,
    list:list,
    fetsh:fetsh
}