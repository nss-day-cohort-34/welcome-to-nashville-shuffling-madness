const whereToPostToDOM = document.querySelector("#listContainer");

const eventbriteHTML = eventbriteItem => {
  return `
       <ol id="clear">
        <ul>${eventbriteItem}<button>Save</button></ul>
       </ol>    
       `;
};

const renderToDOM = htmlString => {
  whereToPostToDOM.innerHTML += htmlString;
};

document.querySelector("#eventbriteButton").addEventListener("click", () => {
  const buttonValue = document.querySelector("#eventbriteInput");
  console.log(buttonValue.value);
  eventbriteFetch(buttonValue.value);
});
