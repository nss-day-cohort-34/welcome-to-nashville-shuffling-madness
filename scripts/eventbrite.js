// const apiKey = "PYDOS5DAOWCBMC3HREFU";
// const eventbriteFetch = (events) => {

//   return fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?q=${events}&location.address=nashville&token=${apiKey}`, {
//   "headers": {
//       "Accept": "application/json"
      
//   }})
//   .then(response => response.json())
//   .then(responses => {
//     console.log(responses)
//     for (let i = 0; i < responses.events.length; i++) {
//       const meetUpName = responses.events[i].name.text
//       const ebHtml = eventbriteHTML(meetUpName)
//       renderToDOMEventbrite(ebHtml)


      
//     }
  
//   })
  
// }
   // eventbriteFetch("Music")


    // const eventbriteToDOM = document.querySelector("#listContainer__event")

    // const eventbriteHTML = (eventbriteItem) => {
    //       return `
    //       <ol>
    //         <li>${eventbriteItem}<button>Save</button></li>
    //       </ol>    
    //       `

    //   }

  //     const renderToDOMEventbrite = (HTMLString) => {
    
   
  //       eventbriteToDOM.innerHTML += HTMLString
  //  }


//    document.querySelector("#eventbriteButton").addEventListener("click", () => {
//     while (eventbriteToDOM.hasChildNodes()) {
//         eventbriteToDOM.removeChild(eventbriteToDOM.firstChild)
//         // listCounter = 0
//     }
//    const buttonValue = document.querySelector("#eventbriteInput")
//     console.log(buttonValue.value)
//     eventbriteFetch(buttonValue.value) 
    
   
// })
      
    