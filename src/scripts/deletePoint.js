import APIDataManger from "./APIDataManager";
import displayPointOfInterest from "./displayPointsOfInterest";



let deletePoint = () => {
    document.querySelector("#interestDisplay").addEventListener("click", event => {
        if (event.target.id.startsWith("delete--")) {
            console.log("delete hit")
            let interestId = event.target.id.split("--")[1]
            console.log(interestId)
            let answer = prompt("Are you sure you want to delete this? YES or NO")
            if (answer === "YES") {
                APIDataManger.deletePoint(interestId).then(() => {
                    alert("Point Deleted")
                    document.querySelector("#interestDisplay").innerHTML = ""
                })
                    .then(() => {
                        displayPointOfInterest()
                    })

            }
        }
    })
}

export default deletePoint

