import APIDataManger from "./APIDataManager";
import createPointOfInterestHTML from "./createPointOfInterestHTML";


APIDataManger.getPointsOfInterest().then((interests => {
    console.log(interests)
    interests.forEach(interest => {
        createPointOfInterestHTML(interest)
        
    });
}))