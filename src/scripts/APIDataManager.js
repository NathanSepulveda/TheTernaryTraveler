let getPointsOfInterestURL = "http://localhost:8088/interests"
let getPlaces = "http://localhost:8088/places"

const APIDataManger = {
    getPointsOfInterest : () => {
        return fetch(`${getPointsOfInterestURL}?_expand=place`)
        .then(res => res.json())
    },
    getPlaces : () => {
        return fetch(getPlaces)
        .then(res => res.json())
    },
    postNewPointOfInterest : (newPoint) => {
        return fetch(getPointsOfInterestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPoint)
        })
    },
    deletePoint : (id) => {
        return fetch(`${getPointsOfInterestURL}/${id}`, {
            method: "DELETE",
        })
    }
}

export default APIDataManger