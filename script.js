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
/*size.addEventListener('click', )
img.addEventListener('click', )
typo.addEventListener('click', )
color.addEventListener('click', )
 .addEventListener('click', ()=> {addElement("", "", "")}) */


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