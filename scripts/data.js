const apiKey = "PYDOS5DAOWCBMC3HREFU";
const eventbriteFetch = () => {
  return fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=event&location.address=nashville&token=${apiKey}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
    .then(response => response.json())
    .then(responses => {
      console.log(responses);
    });
};
eventbriteFetch();
