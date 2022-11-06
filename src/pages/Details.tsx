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
        className="rounded-lg px-6 py-2 bg-slate-200 dark:bg-d-blue-dark"
        to="/"
      >
        Back
      </Link>

      <article className="mt-16">
        <header className="rounded-lg w-11/12 sm:w-6/12 border-2">
          <img
            alt={`${country.name} flag`}
            className="w-full rounded-md"
            src={imgUrl}
            srcSet=""
          />
        </header>

        <div className="flex flex-col gap-3 mt-10">
          <h2 className="text-2xl font-extrabold">{name}</h2>

          {nativeName && (
            <p>
              Native name: <span className="font-light">{nativeName}</span>
            </p>
          )}
          <p>
            Population: <span className="font-light">{population}</span>
          </p>
          <p>
            Region: <span className="font-light">{region}</span>
          </p>
          <p>
            Sub Region: <span className="font-light">{subRegion}</span>
          </p>
          <p>
            Capital: <span className="font-light">{capital}</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {domain && (
            <p>
              Top level domain: <span className="font-light">{domain}</span>
            </p>
          )}

          {currencies && (
            <p>
              Currencies:{" "}
              {currencies.map((language, index) => (
                <span key={language} className="font-light">
                  {(index ? ", " : "") + language}
                </span>
              ))}
            </p>
          )}

          {languages && (
            <p>
              Languages:{" "}
              {languages.map((currency, index) => (
                <span key={currency} className="font-light">
                  {(index ? ", " : "") + currency}
                </span>
              ))}
            </p>
          )}
        </div>

        {borderCountries && (
          <div className="mt-10">
            <h2 className="text-lg">Border Countries: </h2>
            <div className="flex gap-2 flex-wrap mt-3">
              {borderCountries.map((borderCountry) => {
                const country = countries.find((country) => {
                  return country.cca3 === borderCountry;
                });

                return (
                  <Link
                    key={borderCountry}
                    className="font-light dark:bg-d-blue-dark px-6 py-1 rounded-sm"
                    to={`/country/${country!.name}`}
                  >
                    {country?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default Details;
