const apiKey = "PYDOS5DAOWCBMC3HREFU";
const eventbriteFetch = (events) => {

  return fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?q=${events}&location.address=nashville&token=${apiKey}`, {
  "headers": {
      "Accept": "application/json"
      
  }})
  .then(response => response.json())
  .then(responses => {
    console.log(responses)
    for (let i = 0; i < responses.events.length; i++) {
      const meetUpName = responses.events[i].name.text
      console.log(meetUpName)
      
    }
  
  })
  
}
    eventbriteFetch("Music")