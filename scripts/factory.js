//ticketmaster factory

const ticketmasterHTML = (eventName) => {
    listCounter += 1
    return `
        <ul class = "domList">
            <li id="cardT--${listCounter}">${eventName}</li><button id = "saveT--${listCounter}">Save</button>  
        </ul> 
    `
}
//zomato factory
let listCounter = 0
const zomatoHTML = (zomatoItem) => {
    listCounter += 1
    return `
        <ul class = "domList">
            <li id="cardZ--${listCounter}">${zomatoItem}</li><button id = "saveZ--${listCounter}">Save</button>  
        </ul> 
    `
}
//parks factory
const metroHTML = (metroItem) => {
    listCounter += 1
    return `
        <ul class = "domList">
            <li id="cardM--${listCounter}">${metroItem}</li><button id = "saveM--${listCounter}">Save</button>  
        </ul> 
    `
}

//eventbrite factory
const eventbriteHTML = (eventbriteItem) => {
    listCounter += 1
    return `
        <ul class = "domList">
            <li id="cardE--${listCounter}">${eventbriteItem}</li><button id = "saveE--${listCounter}">Save</button>  
        </ul> 
    `

}

const zomatoItinDom = (item) => {
    return `
    <div id = "delete--zomato">
        <ul>
            <li>${item}</li>
        </ul>   
    </div>
    `
}

const parksItinDom = (item) => {
    return `
    <div>
        <ul>
            <li>${item}</li>
        </ul>   
    </div>
    `
}

const ticketItinDom = (item) => {
    return `
    <div>
        <ul>
            <li>${item}</li>
        </ul>   
    </div>
    `
}

const eventItinDom = (item) => {
    return `
    <div>
        <ul>
            <li>${item}</li>
        </ul>   
    </div>
    `
}