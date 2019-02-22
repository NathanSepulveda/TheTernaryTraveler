
// populateDropdown()

let createPointOfInterestHTML = (point) => {
    let display = document.querySelector("#interestDisplay")
    let html = `
    <h1>${point.name}</h1>
    <h2>${point.place.name}</h2>
    <p>${point.description}</p>
    <button id="delete--${point.id}">Delete This Point of Interest</button>`
    
    // display.innerHTML = ""
    display.innerHTML += html
}

export default createPointOfInterestHTML