
const inputContext = document.querySelector("#park__section")




const GetParkSearchPropertyFromInput = (searchInput) => {
    const lowerCaseSearchInput = searchInput.toLowerCase();
    switch (lowerCaseSearchInput) {
        case "basketball court":
        case "basketball courts":
            return "basketball_courts";

        case "dog park":
            return "dog_park";

        case "swimming pool":
            return "swimming_pool";

    }
}


// const metroFetch = (search) => {

//     const feature = GetParkSearchPropertyFromInput(search);
//     // user won't put the correct property
//     fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`)
//         .then(response => response.json())
//         .then((parsedResponse) => {
//             console.log(parsedResponse)
//             for (let i = 0; i < parsedResponse.length; i++) {
//                 const parkName = parsedResponse[i].park_name
//                 const toHtml = metroHTML(parkName)
//                 renderToDOMParks(toHtml)
                
//             }
//         })

// }

// metroFetch("dog PArK");


// document.querySelector("#parksButton").addEventListener("click", () => {
//     const buttonValue = document.querySelector("#parksInput")
//     metroFetch(buttonValue.value)
// })


// const metroHTML = (metroItem) => {
//     return `
//     <ol>
//         <li>${metroItem}<button>Save</button></li>
//     </ol>    
//     `
// }


// const renderToDOMParks = (HTMLString) => {

//     parksContainer.innerHTML += HTMLString
// }

// const parksContainer = document.querySelector("#listContainer__parks")


