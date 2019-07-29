//call tickemaster
document.querySelector("#ticketmasterButton").addEventListener("click", () => {
    while (whereToPostToDOM.hasChildNodes()) {
        whereToPostToDOM.removeChild(whereToPostToDOM.firstChild)
        // listCounter = 0
    }
   const buttonValue = document.querySelector("#ticketmasterInput")
    ticketmasterFetch().then(responses => {
        for (let i = 0; i < responses._embedded.events.length; i++) {
            let genreName = responses._embedded.events[i].classifications[0].genre.name
            let eventName = responses._embedded.events[i].name
            if (buttonValue.value === genreName) {
                const tmHtml = ticketmasterHTML(eventName)
                renderToDOM(tmHtml)

            }

        }

    })
    
   
})

//call parks
document.querySelector("#parksButton").addEventListener("click", () => {
    const buttonValue = document.querySelector("#parksInput")
    metroFetch(buttonValue.value)
})

//call zomato
document.querySelector("#zomatoButton").addEventListener("click", () => {
    while (zomatoToDom.hasChildNodes()) {
        zomatoToDom.removeChild(zomatoToDom.firstChild)
        listCounter = 0
    }
        const buttonValue = document.querySelector("#zomatoInput")
        zomatoFetchCuisineId(buttonValue.value)
})

//call eventbrite
document.querySelector("#eventbriteButton").addEventListener("click", () => {
    while (eventbriteToDOM.hasChildNodes()) {
        eventbriteToDOM.removeChild(eventbriteToDOM.firstChild)
        // listCounter = 0
    }
   const buttonValue = document.querySelector("#eventbriteInput")
    eventbriteFetch(buttonValue.value) 
    
   
})

