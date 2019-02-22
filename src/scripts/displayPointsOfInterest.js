import createPointOfInterestHTML from "./createPointOfInterestHTML";
import APIDataManger from "./APIDataManager";
let displayPointOfInterest = () => {
    APIDataManger.getPointsOfInterest().then((interests => {
        console.log(interests)
        interests.forEach(interest => {
            createPointOfInterestHTML(interest)

        });
    }))
}

export default displayPointOfInterest 