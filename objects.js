//objekt osoba, vlastnosti bez uvozovek : hodnota
let persons = [
    {
        name:"Matyáš Menšík",
        address:"Zlín",
        adult: false,
        bag: ["apple", "cookie", "water", "beer", "bread"],
        image: "images/avatar_1.jpg",
        desc: "Zatím zde nebude žádný popis"
    },

    {
        name: "Tomáš Malý",
        address: "Praha",
        image: "images/avatar_2.jpg",
        adult: true,
        desc: "Zatím zde nebude žádný popis"
    },
    {
        name: "Zuzana Nováková",
        address: "Machová",
        adult: false,
        image: "images/avatar_3.jpg",
        desc: "Zatím zde nebude žádný popis"
    }
]

let positionCarousel = 0
let name = document.getElementById("person-name")
let desc = document.getElementById("person-desc")
let image = document.getElementById("avatar-img")
let address = document.getElementById("address")
function nextPerson(){
    console.log(persons[positionCarousel].name)
    console.log(persons[positionCarousel].address)
    name.innerText = persons[positionCarousel].name
    address.innerText = persons[positionCarousel].address
    desc.innerText = persons[positionCarousel].desc
    image.src = persons[positionCarousel].image

    desc.innerText
    if (persons[positionCarousel].adult === true){
        console.log("Osoba je plnoletá")
    }
    else {
        console.log("Osoba je mladistvá")
    }
    //pokud dosáhnu pozici carouselu o délce pole, tak se vrátím na začátek
    if (persons.length - 1> positionCarousel){
        positionCarousel++
    }
    else {
        positionCarousel = 0
    }
}
//vrátí první hledaný element, který má schodu
let test = document.querySelector('.btn.backdrop')
let anonymFunc = document.querySelector('.btn.af')

//použití deklarované funkce, což znamená že funkce má deklarované tělo v souboru, které můžeme
test.addEventListener('click', helloWorld)
anonymFunc.addEventListener('click', function() {
    console.log("Další anonymní funkce")
})

//kdekoliv kliknu na webu, tak se zavolá anonymní funkce
document.addEventListener('click', function(element){
    //zjištění kliknutého elementu
    if(element.target === image) {
        console.log("Kliknul jsi na obrázek")
    }
})

function helloWorld(){
    console.log("Ahoj světe")
}








































//objekt představuje nějaký prvek reálného světa
//příklad objektu: osoba, počítač, letadlo, budova, soubor
//každý objekt má vlastonsti
//objekty mohou vykonávat nějaké činnosti, které nazýváme funkce/metodyš

//výběr jednoho elementu na základě selektoru
//projde celý dokument a jakmile najde první shodný element, tak ho uloží do proměnné "heading"
//let heading = document.querySelector("h1")
//heading.innerText = persons.firstName + " " + persons.lastName

//let paragraph = document.querySelector("p")
//paragraph.innerText = persons.bag[0]

//výpis obsahu batohu
//for (let i = 0; i < persons.bag.length; i++){
//document.write(persons.bag[i] + "<br>")
//}