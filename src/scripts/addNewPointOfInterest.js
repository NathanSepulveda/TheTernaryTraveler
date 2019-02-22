import createPointOfInterestHTML from "./createPointOfInterestHTML";
import APIDataManger from "./APIDataManager";
import displayPointOfInterest from "./displayPointsOfInterest";

// createPointOfInterestHTML()

let addNewPointOfInterest = () => {

    document.querySelector("#addPointOfInterest").addEventListener("click", event => {
        let name = document.querySelector("#nameOfPoint").value
        let description = document.querySelector("#description").value
        let newPointOfInterest = {
            name: document.querySelector("#nameOfPoint").value,
            description: document.querySelector("#description").value,
            placeId: document.querySelector("#places").value
        }

        if (name !== "" && description !== "") {

            console.log(newPointOfInterest)
            APIDataManger.postNewPointOfInterest(newPointOfInterest)
                .then(() => {
                    document.querySelector("#interestDisplay").innerHTML = ""
                })
                .then(() => {
                    displayPointOfInterest()
                })
        } else {
            alert("Please fill in all the information")
        }

    })
}

export default addNewPointOfInterest