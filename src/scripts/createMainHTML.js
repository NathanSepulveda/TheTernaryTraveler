
let createMainHTML = () => {
    let outputEl = document.querySelector("#output")

    let pageHTML = `
<div id="formDisplay"></div>
<div id="interestDisplay"></div>`

    outputEl.innerHTML += pageHTML
}

export default createMainHTML