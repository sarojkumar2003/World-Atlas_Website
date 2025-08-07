import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "../api/PostApi";
import Loader from "../components/UI/Loader.jsx";
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { SearchFilter } from "../components/Layout/SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  // for the search filters

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      // Replace with your actual data fetching logic
      // getAllCountries();

      const res = await getAllCountries();
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  // search logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filteResion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  }
  const filtersCountries = countries.filter((country) =>
    searchCountry(country) && filteResion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filters={filter}
        setFilters={setFilter}
      />

      <ul className="grid grid-four-cols">
        {filtersCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
