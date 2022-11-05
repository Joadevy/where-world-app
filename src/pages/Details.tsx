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
    subRegion,
    domain,
    currencies,
    languages,
    borderCountries,
  } = country;
  const population = country.population.toLocaleString();

  return (
    <main className="p-6">
      <Link
        className="rounded-lg px-6 py-2 bg-slate-200 dark:bg-d-blue-dark"
        to="/"
      >
        Back
      </Link>

      <article className="mt-10">
        <header className="rounded-sm w-96 border-2 border-white">
          <img alt={`${country.name} flag`} src={imgUrl} srcSet="" />
        </header>
        <div className="flex flex-col gap-4 mt-5">
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

        <div className="mt-8 flex flex-col gap-4">
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

        <div className="mt-5">
          {borderCountries && (
            <p>
              Border Countries:{" "}
              {borderCountries.map((borderCountry, index) => {
                const country = countries.find((country) => {
                  return country.cca3 === borderCountry;
                });

                return (
                  <Link
                    key={borderCountry}
                    className="font-light"
                    to={`/country/${country!.name}`}
                  >
                    {(index ? ", " : "") + country?.name}
                  </Link>
                );
              })}
            </p>
          )}
        </div>
      </article>
    </main>
  );
};

export default Details;
