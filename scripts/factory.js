//ticketmaster factory

const ticketmasterHTML = (eventName) => {
    return `
    <ol id="clear">
        <ul>${eventName}<button>Save</button></ul>
    </ol>    
    `
}
//zomato factory
let listCounter = 0
const zomatoHTML = (zomatoItem) => {
    listCounter += 1
    return `
    <section class="card">
        <ul class = "domList">
            <li id="card--${listCounter}">${zomatoItem}</li><button id = "save--${listCounter}">Save</button>  
        </ul> 
    `
}
//parks factory
const metroHTML = (metroItem) => {
    return `
    <ol>
        <li>${metroItem}<button>Save</button></li>
    </ol>    
    `
}

//eventbrite factory
const eventbriteHTML = (eventbriteItem) => {
    return `
    <ol>
      <li>${eventbriteItem}<button>Save</button></li>
    </ol>    
    `

}