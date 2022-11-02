import { useEffect, useState } from "react";

import { getData as getCountries } from "../Utils/utils";

type ReturnCountries = {
  status: boolean;
  countries: Country[];
};

export type Country = {
  name: string;
  imgUrl: string;
  population: number;
  region: string;
  capital: string[];
  nativeName?: string;
  subRegion?: string;
  domain?: string;
  currencies?: string[];
  languages?: string[];
  borderCountries?: string[];
};

export const useCountries = (url: string): ReturnCountries => {
  const [countries, setCountries] = useState<Country[]>([]); // It should be an use memo hook I think.
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    getCountries(url).then((info) => handleData(info));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleData(data: Array<any>) {
    const dataCountries: Country[] = data.map((item) => {
      const country: Country = {} as Country;

      country.name = item.name.common;
      country.imgUrl = item.flags.png;
      country.population = item.population;
      country.region = item.region;
      if (item.capital) country.capital = [...item.capital];

      // nativeName: item.name.nativeName.eng.official,
      // country.subRegion = item.subregion;
      // if (item.tld) country.domain = item.tld[0];
      // if (item.currencies)
      //   country.currencies = Object.values<Record<string, string>>(
      //     item.currencies
      //   ).map((currency) => {
      //     return currency.name;
      //   });

      // if (item.languages)
      //   country.languages = [...Object.values<string>(item.languages)];

      return country;
    });

    setCountries(dataCountries);
    setStatus(true);
  }

  return { status, countries };
};
