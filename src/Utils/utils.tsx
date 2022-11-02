export const getData = async (url: string) => {
  // const request = await fetch("https://restcountries.com/v3.1/all");
  // Instead of using the real API for dev, use the local info
  console.log("fetching the url: ", url);
  try {
    const request = await fetch(url);
    const response = await request.json();

    return response;
  } catch (error) {
    throw "Unable to fetch the data from the API. " + error;
  }
};
