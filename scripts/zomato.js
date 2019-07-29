// // const apiKeyZomato = "9398cfcb81984536c47a0e2842c844b8"
// const apiKeyZomato = "79df04f76b4dc6992fc7ec364c294290"




// const zomatoFetchCuisineId = (cuisineEntered) => {
//     fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, {
//         headers: {
//             "Accept": "application/json",
//             "user-key": `${apiKeyZomato}`
//         }
//     })
//         .then(data => data.json())
//         .then((results) => {
//             for (let i = 0; i < results.cuisines.length; i++) {
//                 let currentCuisineName = results.cuisines[i].cuisine.cuisine_name
//                 let currentCuisineID = results.cuisines[i].cuisine.cuisine_id
//                 let restaurantID = ""
//                 if (cuisineEntered === currentCuisineName) {
//                     restaurantID = currentCuisineID
//                 }
//                 fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${restaurantID}`, {
//                     headers: {
//                         "Accept": "application/json",
//                         "user-key": `${apiKeyZomato}`
//                     }
//                 })
//                     .then(data => data.json())
//                     .then((results) => {
//                         if (results.results_found < 3760) {
//                             for (let i = 0; i < results.restaurants.length; i++) {
//                                 let restaurantName = results.restaurants[i].restaurant.name
//                                 const toHTML = zomatoHTML(restaurantName)
//                                 renderToDOMZomato(toHTML)
//                             }
//                         }
//                     })
//             }
//         })
// }


//jennas code
// const zomatoFetchCuisineId = (cuisineEntered) => {
//     return fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, {
//         headers: {
//             "Accept": "application/json",
//             "user-key": `${apiKeyZomato}`
//         }
//     })
//         .then(data => data.json())
//         .then((results) => {

//             const data = results.cuisines.forEach(restaurant => {
//                 let currentCuisineName = restaurant.cuisine.cuisine_name
//                 let currentCuisineID = restaurant.cuisine.cuisine_id
//                 let restaurantID = ""
//                 if (cuisineEntered === currentCuisineName) {
//                     restaurantID = currentCuisineID
//                     return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${restaurantID}`, {
//                         headers: {
//                             "Accept": "application/json",
//                             "user-key": `${apiKeyZomato}`
//                         }
//                     }).then((data) => {
//                         console.log(data)
//                     })
//                 }

//             });
//             console.log(data)
//         })
    // .then(data => console.log(data))
    // .then((results) => {
    //     if (results.results_found < 3760) {
    //         for (let i = 0; i < results.restaurants.length; i++) {
    //             let restaurantName = results.restaurants[i].restaurant.name
    //             const toHTML = zomatoHTML(restaurantName)
    //             renderToDOMZomato(toHTML)
    //         }
    //     }
    // })

// }






// document.querySelector("#zomatoButton").addEventListener("click", () => {
//     while (zomatoToDom.hasChildNodes()) {
//         zomatoToDom.removeChild(zomatoToDom.firstChild)
//         listCounter = 0
//     }
//         const buttonValue = document.querySelector("#zomatoInput")
//         zomatoFetchCuisineId(buttonValue.value)


// })
// const zomatoToDom = document.querySelector("#listContainer__zomato")
// const renderToDOMZomato = (HTMLString) => {
//     zomatoToDom.innerHTML += HTMLString
// }
// let listCounter = 0
// const zomatoHTML = (zomatoItem) => {
//     listCounter += 1
//     return `
//     <ul class = "domList">
//         <li>${listCounter}. ${zomatoItem}</li><button>Save</button>  
//     </ul> 
//     `
// }