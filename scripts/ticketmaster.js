// const ticketmasterFetch = (search) => {
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&size=50&apikey=2Ux7EpGd67uNUxQSp4eklukYpowY5pQn")
//         .then(response => response.json())
//         .then(responses => {
//             // console.log(responses)
//             // console.log(responses._embedded.events[0].classifications[0].genre.name)
//             for (let i = 0; i < responses._embedded.events.length; i++) {
//                 let genreName = responses._embedded.events[i].classifications[0].genre.name
//                 let eventName = responses._embedded.events[i].name
//                 if (search === genreName) {
//                     console.log(eventName)
//                     // return eventName
//                     const tmHtml = ticketmasterHTML(eventName)
//                     renderToDOM(tmHtml)

//                 }

//             }

//         })

// }

// ticketmasterFetch("Rock")
// console.log(ticketmasterFetch("Rock"))

// const whereToPostToDOM = document.querySelector("#listContainer__ticket")

// const ticketmasterHTML = (eventName) => {
//     return `
//     <ol id="clear">
//         <ul>${eventName}<button>Save</button></ul>
//     </ol>    
//     `
// }

// const eventbriteHTML = (eventbriteItem) => {
//     return `
//     <ol>
//         <ul><button>Save</button></ul>
//     </ol>    
//     `
// }

// const metroHTML = (metroItem) => {
//     return `
//     <ol>
//         <ul>${}<button>Save</button></ul>
//     </ol>    
//     `
// }

// const zomatoHTML = (zomatoItem) => {
//     return `
//     <ol>
//         <ul>${zomatoItem}<button>Save</button></ul>
//     </ol>    
//     `
// }

// const renderToDOM = (HTMLString) => {
//      whereToPostToDOM.innerHTML += HTMLString
// }




// document.querySelector("#ticketmasterButton").addEventListener("click", () => {
//     while (whereToPostToDOM.hasChildNodes()) {
//         whereToPostToDOM.removeChild(whereToPostToDOM.firstChild)
//         // listCounter = 0
//     }
//    const buttonValue = document.querySelector("#ticketmasterInput")
//     console.log(buttonValue.value)
//     ticketmasterFetch(buttonValue.value) 
    
   
// })

