// get data
// reference to dom element
// html representation & render to DOM
// event listener

// step 2 get reference to my input
const inputContext = document.querySelector("#park__section")


// now I have a function (GetParkSearchPropertyFromInput) that takes the input from the park 
// search by feature and reformats the search value to make it match the valid 
// search property of the API. With that valid search property, I will search the
// API for parks who have that property value as true. (have a boat ramp, etc.)

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

// This function will be triggered when the search button is clicked and the search
// input value will be passed to the function

// step 1 get the data from API
const metroFetch = (search) => {
    // we need to call the function we made below to get the properly formatted search property
    // the info i get from the function below will poof if I don't store it in a variable
    const feature = GetParkSearchPropertyFromInput(search);
    // user won't put the correct property
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`)
        .then(response => response.json())
        .then((parsedResponse) => {
            console.log(parsedResponse)

            // then convert to html and post to DOM


            // console.log(parsedResponse[0])
            // for (let i = 0; i < parsedResponse.length; i++) {
            //     let parkName = parsedResponse[i].park_name
            // let parkAddress = parsedResponse[i].map_location.human_address

            // if (parsedResponse[i].("search") === "Yes") {
            //     console.log(parkName)
            // }
            // if (parsedResponse[i][search] === "Yes") {
            //     console.log(parkName)
            // }
            // const i = 0
            // const firstParsedResponse = parsedResponse[i];
            // const searchPropertyValue = firstParsedResponse[search];
            // // OR
            // firstParsedResponsePropertyValue = parsedResponse[i][search];




            // }
        })

}

// metroFetch("boat_launch")
metroFetch("dog PArK");




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





