// const whereToPostToDOM = document.querySelector("#listContainer");

// const eventbriteHTML = eventbriteItem => {
//   return `
//        <ol id="clear">
//         <ul>${eventbriteItem}<button>Save</button></ul>
//        </ol>    
//        `;
// };

// const renderToDOM = htmlString => {
//   whereToPostToDOM.innerHTML += htmlString;
// };

// document.querySelector("#eventbriteButton").addEventListener("click", () => {
//   const buttonValue = document.querySelector("#eventbriteInput");
//   console.log(buttonValue.value);
//   eventbriteFetch(buttonValue.value);
// });
//eventbrite dom
const eventbriteToDOM = document.querySelector("#listContainer__event")
const renderToDOMEventbrite = (HTMLString) => {
  eventbriteToDOM.innerHTML += HTMLString
}
//ticketmaster to dom
const whereToPostToDOM = document.querySelector("#listContainer__ticket")
const renderToDOM = (HTMLString) => {
  whereToPostToDOM.innerHTML += HTMLString
}

//parks to dom

const parksContainer = document.querySelector("#listContainer__parks")
const renderToDOMParks = (HTMLString) => {
  parksContainer.innerHTML += HTMLString
}
//zomato to dom
const zomatoToDom = document.querySelector("#listContainer__zomato")
const renderToDOMZomato = (HTMLString) => {
    zomatoToDom.innerHTML += HTMLString
}