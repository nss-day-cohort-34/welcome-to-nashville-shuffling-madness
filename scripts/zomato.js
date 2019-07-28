// const apiKeyZomato = "9398cfcb81984536c47a0e2842c844b8"
const apiKeyZomato = "79df04f76b4dc6992fc7ec364c294290"




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
                    // console.log(`${currentCuisineID}`)
                    restaurantID = currentCuisineID
                    // return `${currentCuisineID}`
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
                            // console.log(results)
                            for (let i = 0; i < results.restaurants.length; i++) {
                                let restaurantName = results.restaurants[i].restaurant.name
                                // let restaurantRating = results.results_found[i].restaurant.user_rating.aggregate_rating
                                // console.log(restaurantName)
                                const toHTML = zomatoHTML(restaurantName)
                                renderToDOMZomato(toHTML)
                            }
                        }
                    })
            }
        })
}



// console.log(zomatoFetchCuisineId("African"))
// zomatoFetchRestaurant()
// console.log(fetchedID)
// console.log(taco)


document.querySelector("#zomatoButton").addEventListener("click", () => {
    while (zomatoToDom.hasChildNodes()) {
        zomatoToDom.removeChild(zomatoToDom.firstChild)
        listCounter = 0
    }
        const buttonValue = document.querySelector("#zomatoInput")
        zomatoFetchCuisineId(buttonValue.value)
       

})
const zomatoToDom = document.querySelector("#listContainer__zomato")
const renderToDOMZomato = (HTMLString) => {
    
   
    zomatoToDom.innerHTML += HTMLString
}
let listCounter = 0
const zomatoHTML = (zomatoItem) => {
    listCounter += 1
    return `
    <ul class = "domList">
        <li>${listCounter}. ${zomatoItem}</li><button>Save</button>  
    </ul> 
    `
}