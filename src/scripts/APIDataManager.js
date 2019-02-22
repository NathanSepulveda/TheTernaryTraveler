let getPointsOfInterestURL = "http://localhost:8088/interests"

const APIDataManger = {
    getPointsOfInterest : () => {
        return fetch(`${getPointsOfInterestURL}?_expand=place`)
        .then(res => res.json())
    }
}

export default APIDataManger