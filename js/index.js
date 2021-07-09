document.addEventListener('DOMContentLoaded', () => {
    fetchAllMonsters()
    createNewMonster()
})

function fetchAllMonsters() {
    fetch(`http://localhost:3000/monsters/?_limit=50`)
    .then(res => res.json())
    .then(json => json.forEach(listMonsters))
}

function listMonsters(monsters) {
    let divContainer = document.createElement('div')
    let h2Name = document.createElement('h2')
    let h3Age = document.createElement('h3')
    let pDescription = document.createElement('p')

    divContainer.className = 'monster-info'
    h2Name.className = 'monster-name'
    h2Name.textContent = `Name: ${monsters.name}`
    h3Age.className = 'monster-age'
    h3Age.textContent = `Age: ${monsters.age}`
    pDescription.className = 'monster-info'
    pDescription.textContent = `Description: ${monsters.description}`

    divContainer.append(h2Name, h3Age, pDescription)
    document.querySelector('body').append(divContainer)

    // let buttonForward = querySelector("#forward")
    // console.log(buttonForward)
    // buttonForward.addEventListener ('click', (e) =>
    //     fetchAllMonsters())
    
}

function createNewMonster(data) {
    let divForForm = document.querySelector('#create-monster')
    let formMonster = document.createElement('form')
    formMonster.id = "monsterForm"
    let formName = document.createElement('input')
    formName.id = "monsterName"
    formName.placeholder = "name..."
    let formAge = document.createElement('input')
    formAge.id = "monsterAge"
    formAge.placeholder = "age..."
    let formDescription = document.createElement('input')
    formDescription.id = "monsterDescription"
    formDescription.placeholder = "description..."
    let buttonCreate = document.createElement('button')
    buttonCreate.textContent = "Create"
    formMonster.append(formName, formAge, formDescription, buttonCreate)
    divForForm.append(formMonster)
}



   // buttonCreate.addEventListener('submit' (e) => {
    //     // e.preventDefault()
    //     let newMonster = {
    //         name: e.target.formName.value,
    //         age: e.target.formAge.value,
    //         description: e.target.formDescripton.value
    //     }
    //         return newMonster;
    // // // })