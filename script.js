const section = document.getElementById('sectionBtn');
const conteneur = document.getElementById('conteneurBtn');
const div = document.getElementById('divBtn');
const titre = document.getElementById('titreBtn');
const subtitle = document.getElementById('subtitleBtn');
const paragraph = document.getElementById('paragraphBtn');
const list = document.getElementById('listBtn');
const button = document.getElementById('buttonBtn');
const size = document.getElementById('sizeBtn');
const img = document.getElementById('imgBtn');
const typo= document.getElementById('typoBtn');
const color= document.getElementById('colorBtn');

section.addEventListener('click',addSection)
conteneur.addEventListener('click',addContainer)
div.addEventListener('click',addDiv)
titre.addEventListener('click',addTitle)
subtitle.addEventListener('click',addSubtitle)
paragraph.addEventListener('click',addParagraph)
list.addEventListener('click',addList)
button.addEventListener('click',addButton)
size.addEventListener('click',resize)
img.addEventListener('click',addImg)
typo.addEventListener('click',changeFont)
color.addEventListener('click',colorChange)


function addSection() {
    const newSection = document.createElement("section")
    newSection.classList.add("new-section")
    newSection.setAttribute("id","main-section")
    document.body.appendChild(newSection)
    console.log(newSection)
}
function addContainer() {
    const newContainer = document.createElement("div")
    newContainer.classList.add("conteneur")
    newContainer.setAttribute("id","container")
    document.getElementById('main-section').appendChild(newContainer)
}
function addDiv() {
    const newDiv = document.createElement("div")
    newDiv.classList.add("new-div")
    newDiv.setAttribute("id","box")
    document.getElementById('container').appendChild(newDiv)
}
function addTitle(){
    let entreeUtilisateur = prompt("Entrez votre titre")
    const newH2 = document.createElement("h2")
    newH2.classList.add('up')
    newH2.innerText = entreeUtilisateur
    document.getElementById('container').appendChild(newH2)
}

function addSubtitle(){
    let entreeUtilisateur = prompt('Entrez votre sous-titre ')
    const newH3 = document.createElement("h3")
    newH3.classList.add('sub')
    newH3.innerText = entreeUtilisateur
    document.getElementById('container').appendChild(newH3)
}
function addParagraph(){
    let entreeUtilisateur = prompt('Entrez votre texte')
    const newParagraph = document.createElement("p")
    newParagraph.innerText = entreeUtilisateur
    document.getElementById('box').appendChild(newParagraph)
}
function addList() {
    const newList = document.createElement("ul")
    newList.setAttribute("id","list")
    newList.classList.add('list')
    document.getElementById('box').appendChild(newList)
    console.log(newList)
    
    for(let i = 0; i < 4; i++){
        entreeUtilisateur = prompt("Entrez un élément de votre liste")
        const newItem = document.createElement("li")
        document.getElementById('list').appendChild(newItem)
        newItem.innerText = entreeUtilisateur
        console.log(newItem)
    }
}
function addButton() {
    const newButton = document.createElement("button")
    let entreeUtilisateur = prompt('Entrez le texte de votre bouton')
    newButton.innerText = entreeUtilisateur
    newButton.setAttribute("type","button")
    newButton.addEventListener('click',changeColor)// on est là !!!!
    document.getElementById('container').appendChild(newButton)
}
function changeColor(){
    document.getElementById('main-section').style.backgroundColor = "#004a7f"
}
function resize(){
    document.getElementById('container').style.height = "88%"
}
function addImg() {
    const newImg = document.createElement("img")
    newImg.classList.add("vignette")
    newImg.setAttribute("src","images/Hi.png")
    newImg.setAttribute("id","image")
    newImg.setAttribute("title","cheval qui rit !")
    document.getElementById('container').appendChild(newImg)
}
function changeFont() {
   document.getElementById('title').style.fontFamily = "Edu NSW ACT Foundation, cursive"
   document.getElementById('title').style.fontSize = "3rem"
}
function colorChange() {
    const surprise = document.createElement('button')
    surprise.classList.add('surprise')
    surprise.setAttribute("type","button")
    surprise.innerText = "Surprise"
    surprise.addEventListener('click',fonctionSurprise)
    document.getElementById("container").appendChild(surprise)

    let noirEtblanc = document.getElementById('image')
    noirEtblanc.classList.add('nb')
    document.getElementById('main-section').style.backgroundColor = "#008a88"
    document.getElementById('container').style.backgroundColor = "#004a7f"
    document.getElementById('container').style.color = "#fff"
    document.getElementById('box').style.color = "#001e33"
   
}
function fonctionSurprise(){
    document.getElementById('image').src='images/bou.png'
    document.getElementById('image').style.height = "120px"
    document.querySelector('.sub').style.display = "none"
    document.querySelector('p').style.display = "none"
    document.getElementById('list').style.display = "none"
    let newStyle = document.getElementById('image')
    newStyle.classList.remove('nb')
    let newTitle = document.querySelector(".up")
    newTitle.innerText = "Ha ha ha ha ha !!!"
}

