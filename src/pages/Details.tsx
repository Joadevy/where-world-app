import { type FC } from "react";
import { Link } from "react-router-dom";

import { Country } from "../Hooks/UseCountries";

type props = {
  country: Country;
  countries: Country[];
};

const Details: FC<props> = ({ country, countries }) => {
  const {
    name,
    nativeName,
    capital,
    region,
    imgUrl,
    population,
    subRegion,
    domain,
    currencies,
    languages,
    borderCountries,
  } = country;

  return (
    <main className="p-6">
      <Link
        className="rounded-lg px-6 py-2 lg:m-16 bg-slate-50 dark:bg-d-blue-dark shadow-md"
        to="/"
      >
        <span className="text-lg">←</span> Back
      </Link>

      <article className="mt-16 flex flex-col lg:flex-row lg:justify-evenly">
        <header className="rounded-lg w-11/12 sm:w-8/12 lg:w-2/5  border-2 dark:border-slate-50">
          <img
            alt={`${country.name} flag`}
            className="w-full h-full rounded-md"
            src={imgUrl}
            srcSet=""
          />
        </header>

        <div className="lg:w-2/5">
          <h2 className="text-2xl lg:text-3xl font-extrabold mt-10">{name}</h2>
          <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
            <div className="flex flex-col gap-3 mt-8 lg:mt-5 text-sm">
              {nativeName && (
                <p className="font-semibold">
                  Native name: <span className="font-light">{nativeName}</span>
                </p>
              )}
              <p className="font-semibold">
                Population: <span className="font-light">{population}</span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-light">{region}</span>
              </p>
              <p className="font-semibold">
                Sub Region: <span className="font-light">{subRegion}</span>
              </p>
              <p className="font-semibold">
                Capital: <span className="font-light">{capital}</span>
              </p>
            </div>

            <div className="mt-10 lg:mt-5 flex flex-col gap-3 text-sm">
              {domain && (
                <p className="font-semibold">
                  Top level domain: <span className="font-light">{domain}</span>
                </p>
              )}

              {currencies && (
                <p className="font-semibold">
                  Currencies:{" "}
                  {currencies.map((language, index) => (
                    <span key={language} className="font-light">
                      {(index ? ", " : "") + language}
                    </span>
                  ))}
                </p>
              )}

              {languages && (
                <p className="font-semibold">
                  Languages:{" "}
                  {languages.map((currency, index) => (
                    <span key={currency} className="font-light">
                      {(index ? ", " : "") + currency}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>

          {borderCountries && (
            <div className="mt-10 lg:flex lg:items-center lg:gap-2">
              <h2 className="text-md font-semibold lg:flex-shrink-0 lg:self-start">
                Border Countries:{" "}
              </h2>
              <div className="flex gap-2 flex-wrap mt-3 lg:mt-0">
                {borderCountries.map((borderCountry) => {
                  const country = countries.find((country) => {
                    return country.cca3 === borderCountry;
                  });

                  return (
                    <Link
                      key={borderCountry}
                      className="font-light dark:bg-d-blue-dark px-6 lg:px-4 py-1 rounded-md bg-slate-50 shadow-md hover:opacity-60"
                      to={`/country/${country!.name}`}
                    >
                      {country?.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default Details;
