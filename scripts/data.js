//ticketmaster fetch
const ticketmasterFetch = () => {
    return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&size=50&apikey=2Ux7EpGd67uNUxQSp4eklukYpowY5pQn")
        .then(response => response.json())
        // .then(responses => {
        //     for (let i = 0; i < responses._embedded.events.length; i++) {
        //         let genreName = responses._embedded.events[i].classifications[0].genre.name
        //         let eventName = responses._embedded.events[i].name
        //         if (search === genreName) {
        //             const tmHtml = ticketmasterHTML(eventName)
        //             renderToDOM(tmHtml)

        //         }

        //     }

        // })

}


// const apiKeyZomato = "9398cfcb81984536c47a0e2842c844b8"
const apiKeyZomato = "79df04f76b4dc6992fc7ec364c294290"


//zomato fetch

 const zomatoFetchCuisineId = (cuisineEntered) => {
    fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, {
        headers: {
            "Accept": "application/json",
            "user-key": `${apiKeyZomato}`
        }
    })
        .then(data => data.json())
        .then((results) => {
            for (let i = 0; i < results.cuisines.length; i++) {
                let currentCuisineName = results.cuisines[i].cuisine.cuisine_name
                let currentCuisineID = results.cuisines[i].cuisine.cuisine_id
                let restaurantID = ""
                if (cuisineEntered === currentCuisineName) {
                    restaurantID = currentCuisineID
                }
                fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${restaurantID}`, {
                    headers: {
                        "Accept": "application/json",
                        "user-key": `${apiKeyZomato}`
                    }
                })
                    .then(data => data.json())
                    .then((results) => {
                        if (results.results_found < 3760) {
                            for (let i = 0; i < results.restaurants.length; i++) {
                                let restaurantName = results.restaurants[i].restaurant.name
                                const toHTML = zomatoHTML(restaurantName)
                                renderToDOMZomato(toHTML)
                            }
                        }
                    })
            }
        })
}

//parks fetch

const metroFetch = (search) => {

    const feature = GetParkSearchPropertyFromInput(search);
    // user won't put the correct property
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`)
        .then(response => response.json())
        .then((parsedResponse) => {
            for (let i = 0; i < parsedResponse.length; i++) {
                const parkName = parsedResponse[i].park_name
                const toHtml = metroHTML(parkName)
                renderToDOMParks(toHtml)

            }
        })

}

//eventbrite fetch

const apiKey = "PYDOS5DAOWCBMC3HREFU";
const eventbriteFetch = (events) => {

    return fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?q=${events}&location.address=nashville&token=${apiKey}`, {
        "headers": {
            "Accept": "application/json"

        }
    })
        .then(response => response.json())
        .then(responses => {
            for (let i = 0; i < responses.events.length; i++) {
                const meetUpName = responses.events[i].name.text
                const ebHtml = eventbriteHTML(meetUpName)
                renderToDOMEventbrite(ebHtml)



            }

        })

}