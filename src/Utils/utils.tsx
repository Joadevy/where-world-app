export const getData = async (url: string) => {
  try {
    const request = await fetch(url);
    const response = await request.json();

    return response;
  } catch (error) {
    throw "Unable to fetch the data from the API. " + error;
  }
};
