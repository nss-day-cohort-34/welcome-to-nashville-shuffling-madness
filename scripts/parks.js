
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


const metroFetch = (search) => {
    
    const feature = GetParkSearchPropertyFromInput(search);
    // user won't put the correct property
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`)
        .then(response => response.json())
        .then((parsedResponse) => {
            console.log(parsedResponse)
        })

}

metroFetch("dog PArK");



