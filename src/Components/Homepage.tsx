import type { FC } from "react";

import { useCountries } from "../Hooks/UseCountries";

const Homepage: FC = () => {
  // Fetch the info here :)
  const { status, countries } = useCountries();

  if (!status) return <div>Loading...</div>;
  console.log(countries);

  return (
    <div>
      {countries.map((country, index) => (
        <p key={index}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default Homepage;
