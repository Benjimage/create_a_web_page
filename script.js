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

const message = [
    'Entrez votre titre',
    'Entrez votre sous-titre',
    'Entrez votre texte',
    'Entrez un élément de votre liste',
    'Entrez le texte de votre bouton'
]
let userInput;

section.addEventListener('click', ()=> {addElement("section", "new-section", "body")})
conteneur.addEventListener('click', ()=> {addElement("div", "conteneur",".new-section" )})
div.addEventListener('click', ()=> {addElement("div", "new-div", ".conteneur")})
titre.addEventListener('click', ()=> {addTextElement(0,"h2", "up", ".conteneur")})
subtitle .addEventListener('click', ()=> {addTextElement(1,"h3", "sub", ".conteneur")})
paragraph.addEventListener('click', ()=> {addTextElement(2,"p", null, ".new-div")})
list.addEventListener('click', addList)
button.addEventListener('click',addButton)
size.addEventListener('click', ()=>{document.querySelector('.conteneur').style.height = "88%"})
img.addEventListener('click', addImg)
typo.addEventListener('click',()=>{changeElement('h1','font-family',"Edu NSW ACT Foundation, cursive")})
typo.addEventListener('click',()=>{changeElement('h1','font-size',"4rem")})
color.addEventListener('click', ()=>{
    const surprise = document.createElement('button')
    surprise.classList.add('surprise')
    surprise.setAttribute("type","button")
    surprise.innerText = "Surprise"
    surprise.addEventListener('click',fonctionSurprise)
    document.querySelector(".conteneur").appendChild(surprise)

    let noirEtblanc = document.querySelector('img')
    noirEtblanc.classList.add('nb')
    document.querySelector('.new-section').style.backgroundColor = "#008a88"
    document.querySelector('.conteneur').style.backgroundColor = "#004a7f"
    document.querySelector('.conteneur').style.color = "#fff"
    document.querySelector('.new-div').style.color = "#001e33"
})


function addElement(element,classe,selector) {
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    document.querySelector(selector).appendChild(newElement)
}
function addTextElement(index,element,classe,selector) {
    userInput = prompt (message[index]); 
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    newElement.innerText = userInput
    document.querySelector(selector).appendChild(newElement)
}
function addList() {
    addElement("ul", "list", ".new-div")

    for(let i = 0; i < 4; i++){
        addTextElement(3,"li",'list',"ul")
    }
}  
function addButton() {
    const newButton = document.createElement("button")
    userInput = prompt(message[4])
    newButton.innerText = userInput
    newButton.setAttribute("type","button")
    /* newButton.addEventListener('click',()=>{document.querySelector('.new-section').style.backgroundColor = "#004a7f"}) */
    newButton.addEventListener('click', ()=> {changeElement('.new-section', "background-color","#004a7f")})
    document.querySelector(".conteneur").appendChild(newButton)
}
function changeElement(selector,property,value){
   document.querySelector(selector).style.setProperty(property,value);
}
function addImg() {
    const newImg = document.createElement("img")
    newImg.classList.add("vignette")
    newImg.setAttribute("src","images/Hi.png")
    newImg.setAttribute("id","image")
    newImg.setAttribute("title","cheval qui rit !")
    document.querySelector('.conteneur').appendChild(newImg)
}
function fonctionSurprise(){
    document.querySelector('img').src='images/bou.png'
    document.querySelector('img').style.height = "120px"
    document.querySelector('.sub').style.display = "none"
    document.querySelector('p').style.display = "none"
    document.querySelector('.list').style.display = "none"
    let newStyle = document.querySelector('img')
    newStyle.classList.remove('nb')
    let newTitle = document.querySelector(".up")
    newTitle.innerText = "Ha ha ha ha ha !!!"
}




/*DRAFT*/
/* function changeElement(selector,property,value){
    let change = `document.querySelector("${selector}").style.${property} = "${value}";`
    console.log(selector)
    console.log(property)
    console.log(value)
    console.log(change)
    return change
} */
/* function changeColor(){
    document.querySelector('.new-section').style.backgroundColor = "#004a7f"
} */
/* function addButton() {
    userInput = prompt (message[4]);
    addElement("button", null,".conteneur")
    let btn = document.querySelector(".conteneur").innerText = userInput;
    btn.setAttribute("type","button")
    btn.addEventListener('click',changeColor)
}
function changeColor(){
    document.getElementById('main-section').style.backgroundColor = "#004a7f"
} */
   /*Pour récupérer la fonctionnalité générale, le code daft.js est fonctionnel : 
   ---> basculer depuis index.html vers la source fonctionnelle*/
   //element.addEventListener('click', ()=> {addElement("", "", "")})
   /* console.log(element)
    console.log(classe)
    console.log(selector) */