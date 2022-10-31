import { useEffect, useState } from "react";

type ReturnCountries = {
  status: boolean;
  countries: Country[];
};

type Country = {
  name: string;
  imgUrl: string;
  // nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  domain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
};

export const useCountries = (): ReturnCountries => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    getCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getCountries = async () => {
    // const request = await fetch("https://restcountries.com/v3.1/all");
    // Instead of using the real API for dev, use the local info
    const request = await fetch("./data.json");
    const response = await request.json();

    if (response.length) {
      handleData(response);
    } else {
      throw "Unable to fetch the data from the API";
    }
  };

  function handleData(data: Array<any>) {
    const dataCountries = data.reduce<Country[]>((dataCountries, item) => {
      const country: Country = {} as Country;

      country.name = item.name.common;
      country.imgUrl = item.flags.png;
      // nativeName: item.name.nativeName.eng.official,
      country.population = item.population;
      country.region = item.region;
      country.subRegion = item.subregion;
      if (item.capital) country.capital = [...item.capital];

      // domain: item.tld[0],
      // if (item.currencies) {
      // country.currencies = [...item.currencies];
      // }
      if (item.languages)
        country.languages = [...Object.values<string>(item.languages)];

      dataCountries.push(country);

      return dataCountries;
    }, []);

    setCountries(dataCountries);
    setStatus(true);
  }

  return { status, countries };
};
