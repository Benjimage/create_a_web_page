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

section.addEventListener('click', ()=> {addElement("section", "new-section", "body")})
conteneur.addEventListener('click', ()=> {addElement("div", "conteneur",".new-section" )})
div.addEventListener('click', ()=> {addElement("div", "new-div", ".conteneur")})


function addElement(element,classe,selector) {
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    document.querySelector(selector).appendChild(newElement)
    console.log(element)
    console.log(classe)
    console.log(selector)
}
   
   /*Pour récupérer la fonctionnalité générale, le code daft.js est fonctionnel : 
   ---> basculer depuis index.html vers la source fonctionnelle*/
   //element.addEventListener('click', ()=> {addElement("", "", "")})