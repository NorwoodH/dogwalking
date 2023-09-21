import { getPets, getWalkers } from "./database.js"

const pets = getPets() 
const walkers = getWalkers()


document.addEventListener(
    "click",
    (clickEvent) => {
        //html click event target
        const itemClicked = clickEvent.target
        // did the user click on a pet <li>?
        if(itemClicked.id.startsWith("pet")){
            //What is the primary key of the clicked pet?
            const [,petPrimaryKey] = itemClicked.id.split("--")

            //find the whole pet object to get the name
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }
            //find the related walker object assigned to the pet
            let matchingWalker = null
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                }
            }
            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
        }
    }
)
/*
const pets = getPets()
const walkers = getWalkers()
*/

/* //this event listener makes pets when clicked display pet clicked barks at you
document.body.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.id.startsWith("pet")) {
        const [, petPrimaryKey] = clickedElement.id.split("--");

        // const petObject = getPets().find((pet) => pet.id === parseInt(petPrimaryKey, 10));
        for(const singlePet of pets){

            if(singlePet.id === parseInt(petPrimaryKey)) {
                window.alert(`${singlePet.name} barks at you`)
            }
        }
    }
});
*/


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

   

    return petHTML
};
