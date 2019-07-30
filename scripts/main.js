//call tickemaster
document.querySelector("#ticketmasterButton").addEventListener("click", () => {
    while (whereToPostToDOM.hasChildNodes()) {
        whereToPostToDOM.removeChild(whereToPostToDOM.firstChild)
        listCounter = 0
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
    while (parksContainer.hasChildNodes()) {
        parksContainer.removeChild(parksContainer.firstChild)
        listCounter = 0
    }
    const buttonValue = document.querySelector("#parksInput")
    metroFetch(buttonValue.value)
    listCounter = 0
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
        listCounter = 0
    }
   const buttonValue = document.querySelector("#eventbriteInput")
    eventbriteFetch(buttonValue.value) 
    
   
})

//zomato itin
document.querySelector(".flex").addEventListener("click", (event) => {
    if (event.target.id.split("--")[0] === "saveZ") {
        const id = event.target.id.split("--")[1]
        const string = `#cardZ--${id}`
        const newID = document.querySelector(string)
        const toHTML = zomatoItinDom(newID.innerText)
        renderZomatoItin(toHTML)
    }
})

// ticket to itin
document.querySelector(".flex").addEventListener("click", (event) => {
    if (event.target.id.split("--")[0] === "saveT") {
        const id = event.target.id.split("--")[1]
        const string = `#cardT--${id}`
        const newID = document.querySelector(string)
        const toHTML = ticketItinDom(newID.innerText)
        renderTicketItin(toHTML)
    }
})

//parks to itin
document.querySelector(".flex").addEventListener("click", (event) => {
    if (event.target.id.split("--")[0] === "saveM") {
        const id = event.target.id.split("--")[1]
        const string = `#cardM--${id}`
        const newID = document.querySelector(string)
        const toHTML = parksItinDom(newID.innerText)
        renderParkstItin(toHTML)
    }
})

//event to itin
document.querySelector(".flex").addEventListener("click", (event) => {
    if (event.target.id.split("--")[0] === "saveE") {
        const id = event.target.id.split("--")[1]
        const string = `#cardE--${id}`
        const newID = document.querySelector(string)
        const toHTML = eventItinDom(newID.innerText)
        renderEventItin(toHTML)
    }
})