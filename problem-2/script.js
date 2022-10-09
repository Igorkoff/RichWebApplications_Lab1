const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
        <div class="colors">
            <input type="radio" id="yellow" name="color" value="Yellow" checked>
            <label for="yellow">Yellow</label>
            <input type="radio" id="blue" name="color" value="Blue">
            <label for="blue">Blue</label>
            <input type="radio" id="pink" name="color" value="Pink">
            <label for="pink">Pink</label>
        </div>
        <button class="edit"><i class="fa fa-pencil"></i></button>
        <button class="delete"><i class="fa fa-trash"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    deleteBtn.addEventListener('click', () => {
        note.remove()
    })

    document.body.appendChild(note)
}