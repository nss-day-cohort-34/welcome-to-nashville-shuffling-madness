// get data
// reference to dom element
// html representation & render to DOM
// event listener

// step 2 get reference to my input
const inputContext = document.querySelector("#park__section")


// step 1 get the data from API
const metroFetch = (search) => {
    fetch("https://data.nashville.gov/resource/74d7-b74t.json")
        .then(response => response.json())
        .then((parsedResponse) => {
    // console.log(parsedResponse[0])
    for (let i = 0; i < parsedResponse.length; i++) {
        let parkName = parsedResponse[i].park_name
        // let parkAddress = parsedResponse[i].map_location.human_address

        if (parsedResponse[i].("search") === "Yes") {
            console.log(parkName)
        }

    }
})     
    
}

metroFetch("boat_launch")





// fetch(`https://data.nashville.gov/resource/74d7-b74t.json?park_name=${inputValue}`)
//     .then(response => response.json())
//     .then(response => htmlRep(response))



// html rep
// const htmlRep = (response) => {
// const parkHtml=  ` 
//     <div>
//     <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     </ul>
//     </div>
//     `
//     // could save the string in a variable above
//     inputContext.innerHTML += parkHtml
// }



