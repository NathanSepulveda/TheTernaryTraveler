import APIDataManger from "./APIDataManager";

let populateDropdown = () => {
    let dropDown = document.querySelector("#places")
    dropDown.innerHTML = ""
    APIDataManger.getPlaces()
        .then(placeNames => {
            // console.log(studentNames)
            placeNames.forEach(place => {
                let html = `
    <option id="${place.id}" value=${place.id}>${place.name}</option>
    `
                dropDown.innerHTML += html
            })
        })
}



let createForm = () => {
    let formDisplay = document.querySelector("#formDisplay")
    let html = `
    <div>
        <fieldset>
            <label for="nameOfPoint">Name of Interest</label>
            
            <input type="text" name="nameOfPoint" id="nameOfPoint" placeholder="Please Add Point of Interest's Name...">
        </fieldset>
        <fieldset>
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description"></textarea>
        </fieldset>
        <fieldset>
        <label for="location">
        <select id="places">

        </select>
        </label>
        <button id="addPointOfInterest">Add New Point Of Interest!</button>
    `
    formDisplay.innerHTML = html
    populateDropdown()
}

export default createForm