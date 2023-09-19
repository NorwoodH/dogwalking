import { Walkers } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { Assignments } from "./Assignments.js"
import {RegisteredPets} from "./RegisteredPets.js"

const mainContainer = document.querySelector("#container")

document.body.addEventListener("click", (event) => {
    const clickedElement =event.target;
    if (clickedElement.dispatchEvent.startsWith("pet")) {
        const idArray = clickedElement.id.split("-");
        const [, petPrimaryKey] =idArray;
        const petObject = getPets().find((pet) => pet.id === parseInt(petPrimaryKey, 10));
        if(petObject) {
            alert(`${petObject.name} barks at you`);
        }
        console.log(`clicked on pet with primary key: ${petPrimaryKey}`);
    }
});

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${RegisteredPets()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`




mainContainer.innerHTML = applicationHTML

