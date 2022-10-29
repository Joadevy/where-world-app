import { useEffect, useState } from "react";

type ReturnCountries = {
  status: boolean;
  countries: Country[];
};

type Country = {
  name: string;
  imgUrl: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  domain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
};

export const useCountries = (): ReturnCountries => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    console.log("USE COUNTRIES!");
    getCountries();
  }, []);

  const getCountries = async () => {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const response = await request.json();

    if (response.length) {
      handleData(response);
    } else {
      console.error("API Fetch countries data error");
    }

    // console.log(response);
  };

  function handleData(data: any) {
    console.log(data);
    setCountries(data);
    setStatus(true);
    console.log("status:" + status);
  }

  return { status, countries };
};
