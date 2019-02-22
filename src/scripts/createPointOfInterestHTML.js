let createPointOfInterestHTML = (point) => {
    let display = document.querySelector(".output")
    let html = `
    <h1>${point.name}</h1>
    <h2>${point.place.name}</h2>
    <p>${point.description}</p>
    <button id="${point.id}">Delete This Point of Interest</button>`

    display.innerHTML += html
}

export default createPointOfInterestHTML